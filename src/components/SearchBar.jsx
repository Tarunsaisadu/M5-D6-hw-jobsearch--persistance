import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToFavouritesAction, fetchjobsAction } from "../actions";
import "bootstrap/dist/css/bootstrap.min.css";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => dispatch(fetchjobsAction()),
  fetchJobsWithSearch: (search) => dispatch(fetchjobsAction(search)),
});

function SearchBar({
  history,
  location,
  match,
  fetchJobs,
  fetchJobsWithSearch,
  details,
}) {
  const [userQuery, setuserQuery] = useState("");

  const updateUserQuery = (event) => {
    console.log("userQuery", "setuserQuery");
    fetchJobsWithSearch(userQuery);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchJobsWithSearch(userQuery);
    }
  };
  console.log({ details });

  return (
    <div>
      <div className="form">
        <Container>
          <Row>
            <Col>
              <input
                id="searchbar"
                onKeyPress={handleKeyPress}
                value={userQuery}
                onChange={(e) => setuserQuery(e.target.value)}
              />
              <Button variant="light" onClick={updateUserQuery}>
                {" "}
                Search
              </Button>
            </Col>
          </Row>
          <div>
            <Row>
              <Col>
                <Link to="/jobs">
                  <h3
                    style={{ marginLeft: "80px" }}
                    // onClick={() => history.push("/Favourites")}
                  >
                    Favourites
                  </h3>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div>
        {details.details && details.details.map((job, i) => <Job data={job} />)}
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
