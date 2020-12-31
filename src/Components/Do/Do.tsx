import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import pantheonx from './img_pantheonx.png';
import volta from './img_volta.png';

/**
 * Do
 * @return {JSX.Element}
 */
class Do extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-w" fluid>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <h3>What We Do</h3>
        </Col>
        <Col md lg xl={3}>
          <img src={pantheonx} className="img-fluid"/>
          <h4 className="brand">Pantheon X</h4>
          <p className="brandexplain">
            A blockchain project that seeks to realize an open
            business platform for digital asset finance.
          </p>
        </Col>
        <Col md lg xl={{span: 3, offset: 2}}>
          <img src={volta} className="img-fluid"/>
          <h4 className="brand">VOLTA</h4>
          <p className="brandexplain">
            All-in-one digital asset management platform
            for investors and trading experts.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Do;
