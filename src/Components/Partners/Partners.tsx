import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import blockcrafters from './img_blockcrafters.svg';
import fintechlab from './img_fls.svg';
import longhash from './img_longhash.svg';
import plugandplay from './img_p&p.svg';
import sba from './img_sba.svg';
import sparklabs from './img_sparklabs.svg';
import './Partners.scss';

/**
 * Partners
 * @return {JSX.Element}
 */
class Partners extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-w" fluid>
      <Row className="vh-100 justify-content-center mb-8">
        <Col xs={12} className="text-center">
          <h3 className="sectiontitle">Partners</h3>
        </Col>
        <Col md={4} lg={4} xl={4}>
          <div
            className="partners_bg"
          >
            <img
              src={blockcrafters} className="partners"
            />
          </div>
        </Col>
        <Col md={4} lg={4} xl={4}>
          <div
            className="partners_bg"
          >
            <img src={fintechlab} className="partners"/>
          </div>
        </Col>
        <Col md={4} lg={4} xl={4}>
          <div
            className="partners_bg"
          >
            <img src={longhash} className="partners"/>
          </div>
        </Col>
        <Col md={4} lg={4} xl={4}>
          <div
            className="partners_bg"
          >
            <img src={plugandplay} className="partners"/>
          </div>
        </Col>
        <Col md={4} lg={4} xl={4}>
          <div
            className="partners_bg"
          >
            <img src={sba} className="partners"/>
          </div>
        </Col>
        <Col md={4} lg={4} xl={4}>
          <div
            className="partners_bg"
          >
            <img src={sparklabs} className="partners"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;
