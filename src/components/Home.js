import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Sobhan Bhuyan</h1>
        <p>this is development......</p>
        <Container>
          <Button color="primary" onClick="btnHandle">
            Start Using
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;
