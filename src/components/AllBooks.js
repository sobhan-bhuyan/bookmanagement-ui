import React, { useState, useEffect } from "react";
import Book from "./Book";

const AllBooks = () => {
  useEffect(() => {
    alert("testing");
  }, []);

  const [books, setBooks] = useState([
    { title: "java book", description: "desc for java book" },
    { title: "python book", description: "desc for python book" },
    { title: "Angular book", description: "desc for Angular book" },
  ]);
  return (
    <div>
      <h1> All Books</h1>
      <p>List of Books:-</p>

      {books.length > 0
        ? books.map((item) => <Book book={item} />)
        : "No Books Listed"}
    </div>
  );
};

export default AllBooks;
