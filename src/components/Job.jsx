import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToFavouritesAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFav: (jobToAdd) => dispatch(addToFavouritesAction(jobToAdd)),
});
function Job({ data, addToFav, favs }) {
  const [selected, setSelected] = useState(false);
  console.log({ favs });
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={8} xl={8}>
            <Card
              className="mb-2"
              onClick={() => setSelected({ selected: !selected })}
              style={{
                border: selected ? "3px solid blue" : "none",
                width: "30rem",
              }}
            >
              <Card.Header>{data.title}</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Link to={data.company_name}>{data.company_name}</Link>
                </Card.Title>
                <Badge variant="dark">{data.candidate_required_location}</Badge>
                <Card.Text> {data.salary}</Card.Text>
                <a href={data.url}>
                  <Button variant="primary">Read more</Button>
                </a>
                <Button variant="light" onClick={() => addToFav(data)}>
                  ❤️
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Job));
