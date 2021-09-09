import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Book from "./components/Book";
import AllBooks from "./components/AllBooks";
import AddBooks from "./components/AddBooks";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const btnHandle = () => toast("this is my first message");

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />

          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-book" component={AddBooks} exact />
              <Route path="/view-books" component={AllBooks} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
