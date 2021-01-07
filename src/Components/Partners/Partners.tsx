import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import blockcrafters from './img_blockcrafters.svg';
import fintechlab from './img_fls.svg';
import longhash from './img_longhash.svg';
import plugandplay from './img_pnp.svg';
import sba from './img_sba.svg';
import sparklabs from './img_sparklabs.svg';
import './Partners.scss';

const classNameData = 'rounded mx-auto d-block';

const imgSrcData = [
  blockcrafters, fintechlab, longhash, plugandplay, sba, sparklabs];

/**
 * Partners
 * @return {JSX.Element}
 */
class Partners extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-partners" fluid>
      <Row className="vh-100 justify-content-center mb-8">
        <Col xs={12} className="text-center">
          <h3 className="sectiontitle">Partners</h3>
        </Col>
        {
          imgSrcData.map((imgSrc, _index) => (
            <Col md={4} lg={4} xl={4} key={_index}>
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
