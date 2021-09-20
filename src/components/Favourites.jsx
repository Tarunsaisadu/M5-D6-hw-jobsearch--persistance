import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavAction } from "../actions";
import Job from "./Job";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  favs: state.favs.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (index) => {
    dispatch(removeFromFavAction(index));
  },
});

const Favourites = ({ favs, removeFromFav }) => {
  return (
    <>
      {console.log(favs, "from fav")}
      <Row>
        <h1>Fav page</h1>
        <Col>
          {favs.map((f, i) => (
            <div>
              <h6>{f.title} </h6>
              <Button onClick={() => removeFromFav(i)}>remove</Button>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Favourites));
