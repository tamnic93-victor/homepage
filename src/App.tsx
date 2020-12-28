import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, NavbarBrand, Row} from 'react-bootstrap';

/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container fluid>
      <Navbar>
        <NavbarBrand>
          <img
            src="./images/lg_bclabs.png"
            width="95"
            height="36"
            className="d-inline-block align-top"
            alt="BCLabs"
          />
        </NavbarBrand>
      </Navbar>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={8} lg={8} xl={6}>
          <div className="title">
            Universal Access to Digital Asset Management<br/>
            “for Anyone, Anytime, Anywhere ”
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={10} md={8} lg={8} xl={4}>
          <p className="slogan">
            With a team specializing in fintech, blockchain and data
            analytics, we seek to harness the cutting-edge innovations
            and address the growing technology gap in the global
            financial industry.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
