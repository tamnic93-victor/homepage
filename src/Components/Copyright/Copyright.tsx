import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './Copyright.scss';

/**
 * Copyright
 * @return {JSX.Element}
 */
class Copyright extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-Copyright" fluid>
      <Row className="justify-content-center align-items-center">
        <h4 className="footertext my-5 px-5">
          Copyright © 2020 bclabs Inc. All right reserved.
        </h4>
      </Row>
    </Container>
  );
}

export default Copyright;
