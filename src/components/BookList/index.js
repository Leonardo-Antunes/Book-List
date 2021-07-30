import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import BookItem from '../BookItem';
import { Wrapper, Title, List } from "./styles";

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <Wrapper>
        <Title>Lista de Leitura</Title>
        <List>
          {books.map((book) => {
            return (
              <BookItem key={book.id}>
                {book.title}
              </BookItem>
            );
          })}
        </List>
      </Wrapper>
    </>
  );
};

export default BookList;
