import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './Copyright.scss';
import mail from './ic_mail_outline.svg';

/**
 * Copyright
 * @return {JSX.Element}
 */
class Copyright extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-copyright" fluid>
      <Row className="align-items-center">
        <Col sm={12} className="mailbox text-center mt-5 mb-2">
          <object
            type="image/svg+xml" className="bg-contact" data={mail}
            data-aos="fade"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset="-100">
            <img src={mail} className="bg-contact" alt="contact" />
          </object>
        </Col>
        <Col sm={12} className="mb-4">
          <h4
            className="contact-text m-0"
            data-aos="fade"
            data-aos-delay="200"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset="-100">
            info@bclabs.co.kr
          </h4>
        </Col>
        <Col sm={12} className="text-center">
          <h5
            className="footer-text mb-0"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset="-100">
            Copyright © 2020 bclabs Inc. All right reserved.
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Copyright;
