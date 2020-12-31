import React from 'react';
import {Col, Container, Navbar, NavbarBrand, Row} from 'react-bootstrap';
import logo from './lg_bclabs.svg';

/**
 * Main
 * @return {JSX.Element}
 */
class Main extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg" fluid>
      <Navbar className='d-flex logo'>
        <NavbarBrand>
          <img
            src={logo}
            alt="BCLabs"
          />
        </NavbarBrand>
      </Navbar>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col sm={10} md={8} xl={6} className="text-center">
          <h1>
            Universal Access to Digital Asset Management
          </h1>
          <h2>
            “for Anyone, Anytime, Anywhere”
          </h2>
          <p>
            With a team specializing in fintech, blockchain and data
            analytics, we seek to harness the cutting-edge innovations
            and address the growing technology gap in the global
            financial industry.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
