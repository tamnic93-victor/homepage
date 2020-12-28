import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Col, Container, Navbar, NavbarBrand, Row} from 'react-bootstrap';
import logo from './images/lg_bclabs.svg';

/**
 * App
 * @return {JSX.Element}
 */
class App extends React.Component<any, any> {
  render = (): JSX.Element => (
    <div>
      <Container id="section1" fluid>
        <Navbar className='logo'>
          <NavbarBrand>
            <img
              src={logo}
              alt="BCLabs"
            />
          </NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <div className="mainphrase">
              <h1 className="title1">
                Universal Access to Digital Asset Management
              </h1>
              <h2 className="title2">
                “for Anyone, Anytime, Anywhere”
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={8} xl={6}>
            <p className="slogan">
              With a team specializing in fintech, blockchain and data
              analytics, we seek to harness the cutting-edge innovations
              and address the growing technology gap in the global
              financial industry.
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="section2" fluid>
        <Row>
          <h3>What We Do</h3>
        </Row>
      </Container>
      <Container id="section3" fluid>
        <Row>
          <h3>Company History</h3>
        </Row>
      </Container>
      <Container id="section4" fluid>
        <Row>
          <h3>Partners</h3>
        </Row>
      </Container>
      <Container id="section5" fluid>
        <Row>
          <h3>Copyright © 2020 bclabs Inc. All right reserved.</h3>
        </Row>
      </Container>
    </div>
  );
};

export default App;
