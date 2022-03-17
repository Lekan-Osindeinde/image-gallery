import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Search = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Search for new images....." />
              </Col>
              <Col>
                <button variant ="primary" type = "submit">Search</button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
