import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import blockcrafters from './img_blockcrafters.svg';
import fintechlab from './img_fls.svg';
import longhash from './img_longhash.svg';
import plugandplay from './img_pnp.svg';
import sba from './img_sba.svg';
import sparklabs from './img_sparklabs.svg';
import './Partners.scss';

const classNameData = 'partners';

const imgSrcData = [
  blockcrafters, fintechlab, longhash, plugandplay, sba, sparklabs];

/**
 * Partners
 * @return {JSX.Element}
 */
class Partners extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-partners" fluid>
      <Row className="vh-partners row-partners justify-content-center">
        <Col xs={12} className="text-center">
          <h3 className="section-title">
            <span
              className="section-bold">
              Let me introduce</span> our reliable partner.
          </h3>
        </Col>
        {
          imgSrcData.map((imgSrc, _index) => (
            <Col xs={12} sm={6} md={6} lg={4} xl={4} key={_index}>
              <div
                className="partners_bg">
                <img src={imgSrc} className={classNameData} alt="partner" />
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default Partners;
