import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './Copyright.scss';

/**
 * Copyright
 * @return {JSX.Element}
 */
class Copyright extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-copyright" fluid>
      <Row className="align-items-center">
        <Col className="text-center">
          <h4
            className="footer-text mb-0"
            data-aos="zoom-out"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true">
            Copyright © 2020 bclabs Inc. All right reserved.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Copyright;
