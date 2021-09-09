//Single book component
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

const Book = ({ book }) => {
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weigth-bold">{book.title}</CardSubtitle>
        <CardText>{book.description}</CardText>
        <Container className="text-center">
          <Button color="danger">Delete</Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Book;
