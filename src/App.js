import React from "react";
import { Provider } from "react-redux";

import { AddBook, BookList } from "./components";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AddBook />
      <BookList />
    </Provider>
  );
}

export default App;
