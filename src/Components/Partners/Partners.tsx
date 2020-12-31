import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import blockcrafters from './img_blockcrafters.png';
import fintechlab from './img_fintechlab.png';
import longhash from './img_longhash.png';
import plugandplay from './img_plugandplay.png';
import sba from './img_sba.png';
import sparklabs from './img_sparklabs.png';

/**
 * Partners
 * @return {JSX.Element}
 */
class Partners extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-w" fluid>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <h3>Partners</h3>
        </Col>
        <Col sm={4}>
          <img src={blockcrafters} className="rounded mx-auto d-block"/>
        </Col>
        <Col sm={4}>
          <img src={fintechlab} className="rounded mx-auto d-block"/>
        </Col>
        <Col sm={4}>
          <img src={longhash} className="rounded mx-auto d-block"/>
        </Col>
        <Col sm={4}>
          <img src={plugandplay} className="rounded mx-auto d-block"/>
        </Col>
        <Col sm={4}>
          <img src={sba} className="rounded mx-auto d-block"/>
        </Col>
        <Col sm={4}>
          <img src={sparklabs} className="rounded mx-auto d-block"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;
