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

const partnerData = [
  {
    imgSrc: blockcrafters,
    link: 'https://blockcrafters.com/',
    name: 'Block Crafters',
  },
  {
    imgSrc: fintechlab,
    link: 'https://seoulfintechlab.kr/en/',
    name: 'Seoul Fintech Lab',
  },
  {
    imgSrc: longhash,
    link: 'https://www.longhash.com/en',
    name: 'LONGHASH',
  },
  {
    imgSrc: plugandplay,
    link: 'https://www.plugandplaytechcenter.com/',
    name: 'plugandplay',
  },
  {
    imgSrc: sba,
    link: 'https://new.sba.kr/user/main.do',
    name: 'sba',
  },
  {
    imgSrc: sparklabs,
    link: 'http://www.sparklabs.co.kr/lb/index.php',
    name: 'sparklabs',
  },
];

/**
 * Partners
 * @return {JSX.Element}
 */
class Partners extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-partners" fluid>
      <Row className="vh-partners row-partners justify-content-center">
        <Col xs={12} className="text-center">
          <h3
            className="section-title"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset='-100'>
            <span
              className="section-bold">
              Let us introduce</span> our reliable partners.
          </h3>
        </Col>
        {
          partnerData.map((partner, _index) => (
            <Col xs={12} sm={6} md={6} lg={6} xl={4} key={_index}>
              <a href={partner.link} target="blank" className="partners_bg">
                <object
                  type="image/svg+xml"
                  className={classNameData}
                  data={partner.imgSrc}>
                  <img
                    src={partner.imgSrc}
                    className={classNameData}
                    alt={partner.name} />
                  <span className="sr-only">{partner.name}</span>
                </object>
              </a>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default Partners;
