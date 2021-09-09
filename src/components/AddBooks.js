import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddBooks = () => {
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Book details</h1>
      <Form>
        <FormGroup>
          <label for="userId">Book ID</label>
          <Input
            type="text"
            placeholder="Enter Id here"
            name="userId"
            id="userId"
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Book Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            name="title"
            id="title"
          />
        </FormGroup>

        <FormGroup>
          <label for="description"> Book Description</label>
          <Input
            type="text-area"
            placeholder="Enter description here"
            id="desc"
            style={{ height: 100 }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success" className="mr-30">
            Add Book
          </Button>
          <Button color="warning" className="ml-2">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddBooks;
