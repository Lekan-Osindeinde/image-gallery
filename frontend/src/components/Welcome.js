import React from "react";
import { Button, Container } from "react-bootstrap";

const Welcome = () => (
  <Container
    style={{
      maxWidth: "800px",
      maxHeight: "400px",
      backgroundColor: "#eeeeee",
    }}
  >
    <h1>Image Gallery</h1>
    <p>
      This is a simple application that retrive photo from unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Container>
);
export default Welcome;
