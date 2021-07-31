import React from "react";
import { useSelector } from "react-redux";

import BookItem from '../BookItem';
import { Wrapper, Title, List } from "./styles";

const BookList = (book) => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <Wrapper>
        <Title>Lista de Leitura</Title>
        <List>
          {books.map((book) => {
            return (
              <BookItem key={book.id} id={book.id} title={book.title}></BookItem>
            );
          })}
        </List>
      </Wrapper>
    </>
  );
};

export default BookList;
