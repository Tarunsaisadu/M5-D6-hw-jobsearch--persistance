import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CompanyDetails(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  let api = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  const getDetails = async () => {
    let response = await fetch(api + props.match.params.companyName);
    let jobs = await response.json();
    setResults(jobs.data);
  };

  return (
    <div>
      <h1>
        We welcome you to our company details page :
        {props.match.params.companyName}
      </h1>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            {results.slice(0, 1).map((result) => {
              return (
                <div>
                  <Card border="primary">
                    <Card.Header>{result.company_name}</Card.Header>
                    <Card.Body>
                      <Card.Title>{result.title}</Card.Title>
                      <Card.Text
                        dangerouslySetInnerHTML={{ __html: result.description }}
                      ></Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
