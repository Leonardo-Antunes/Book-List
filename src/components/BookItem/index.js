import React from "react";
import { useDispatch } from "react-redux";
import bookSlice, { deleteBook } from "../../redux/bookSlice";

import { Item } from "./style";

const BookItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook({ id }));
  };

  return (
    <>
      <span>
        <Item type="text" onClick={handleDelete}>{title}</Item>
      </span>
      <button>Delete</button>
    </>
  );
};

export default BookItem;
