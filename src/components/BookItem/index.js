import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook, updateBook } from "../../redux/bookSlice";

import { Item } from "./style";

const BookItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook({ id }));
  };

  const handleUpdate = () => {
    dispatch(updateBook({ id, title }));
  };

  return (
    <>
      <span>
        <Item type="text">{title}</Item>
      </span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Edit</button>
    </>
  );
};

export default BookItem;
