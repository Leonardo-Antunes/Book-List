import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/bookSlice";

import { Item } from "./style";

const BookItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook({ id }));
  };

  return (
    <>
      <span>
        <Item type="text">{title}</Item>
      </span>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default BookItem;
