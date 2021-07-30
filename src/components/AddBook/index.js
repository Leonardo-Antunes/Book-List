import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/bookSlice";

import { Input, Wrapper, Button } from './styles';

const AddBook = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addBook({
          title: value,
        })
      );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Wrapper>
        <Input
          type="text"
          placeholder="Adicionar Livros..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button type="submit">Adicionar Leitura</Button>
      </Wrapper>
    </form>
  );
};

export default AddBook;
