import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-book"
        action
      >
        Add Book
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/view-books"
        action
      >
        View Books
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        About Me
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        Contact
      </Link>
    </ListGroup>
  );
};

export default Menus;
