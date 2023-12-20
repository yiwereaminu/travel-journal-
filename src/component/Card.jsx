import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="container-margin">
      <Container className="center-container">
        <Row>
          <Col sm={5}>
            <img src={props.item.imageUrl} className="card-image"></img>
          </Col>
          <Col sm={7}>
            <div className="card-heading">
              <span className="card-location-image">
                <img src="./images/location.svg"></img>
              </span>
              <span className="card-location">
                <p>{props.item.location}</p>
              </span>
              <span className="card-location-link">
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
              </span>
            </div>
            <div className="card-details">
              <h1>{props.item.title}</h1>
              <h3>
                {props.item.startDate} - {props.item.endDate}
              </h3>
              <p>{props.item.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
};
