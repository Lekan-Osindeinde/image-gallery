import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Search = () => {
  return (
    <Container className='mt-4'>
      <Row className='justify-content-center'>
        <Col xs ={12} md ={8} lg={6}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for new images....." />
              </Col>
              <Col>
                <button variant="primary" type = "submit">Search</button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
