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
          <h2
            className="sectiontitle"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
              What We Do
          </h2>
        </Col>
        <Col md lg xl={4}>
          <a href="https://pantheonx.io/#/home/en">
            <img
              src={pantheonx}
              className="img-fluid"
            />
          </a>
          <h4 className="brand">Pantheon X</h4>
          <p className="brandexplain">
            A blockchain project that seeks to realize an open
            business platform for digital asset finance.
          </p>
        </Col>
        <Col md lg xl={{span: 4, offset: 1}}>
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
