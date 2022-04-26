import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, Row, Col, Input } from 'antd';

import { ApplicationState } from 'store';
import { getBooksRequest } from 'store/modules/books/actions';

import { BookData } from 'store/modules/books/types';
import { Container, Content } from './styles';

export function Books() {
  const dispatch = useDispatch();

  const { data } = useSelector((state: ApplicationState) => state.books);

  const [booksFiltered, setBooksFiltered] = useState<BookData[]>([]);

  useEffect(() => {
    dispatch(getBooksRequest());
  }, [dispatch]);

  useEffect(() => {
    setBooksFiltered(data);
  }, [data]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.currentTarget.value;

      if (!searchValue) {
        return setBooksFiltered(data);
      }

      const searchArray: BookData[] = [];
      data.forEach((element: BookData) => {
        if (
          element.title
            .toLocaleLowerCase()
            .indexOf(searchValue.toLocaleLowerCase()) !== -1 ||
          new Date(element.publishDate)
            .toLocaleDateString('EN-US')
            .indexOf(searchValue) !== -1
        ) {
          searchArray.push(element);
        }
      });
      return setBooksFiltered(searchArray);
    },
    [data],
  );

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: '1',
      width: 100,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: '2',
    },
    {
      title: 'Publish Date',
      dataIndex: 'publishDate',
      key: '3',
      render: (text: string) => {
        return new Date(text).toLocaleDateString('EN-US');
      },
    },
  ];

  return (
    <Container>
      <Content>
        <Row>
          <Col>
            <h1>Book List</h1>
          </Col>
        </Row>
        <Row align="middle">
          <Col>
            <span>Search by title or publish date:</span>
          </Col>
          <Col>
            <Input placeholder="Type your search..." onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table
              dataSource={booksFiltered}
              columns={columns}
              rowKey={record => record.id}
            />
          </Col>
        </Row>
      </Content>
    </Container>
  );
}
