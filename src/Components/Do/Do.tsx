import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import pantheonx from './img_pantheonx.svg';
import volta from './img_volta.svg';
import './Do.scss';

/**
 * Do
 * @return {JSX.Element}
 */
class Do extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-do" fluid>
      <Row className="vh-do justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <h2
            className="sectiontitle"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true">
            What We Do
          </h2>
        </Col>
        <Col xs={10} sm={10} md={8} lg={4} xl={4}>
          <a
            href="https://pantheonx.io/#/home/en"
            target="blank" className="pantheonx_bg">
            <img src={pantheonx} className="pantheonx" alt="PANTHEON X" />
          </a>
          <h4
            className="brand"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offet="-200px">
            PANTHEON X
          </h4>
          <p
            className="brandexplain"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offet="-300px">
            A blockchain project that seeks to realize an open
            business platform for digital asset finance.
          </p>
        </Col>
        <Col
          xs={10}
          md={8}
          lg={{span: 4, offset: 1}}
          xl={{span: 4, offset: 1}}>
          <a
            href="https://volta.link/landing"
            target="blank" className="volta_bg">
            <img src={volta} className="volta" alt="VOLTA" />
          </a>
          <h4
            className="brand"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offet="-200px">
            VOLTA
          </h4>
          <p
            className="brandexplain"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offet="-300px">
            All-in-one digital asset management platform
            for investors and trading experts.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Do;
