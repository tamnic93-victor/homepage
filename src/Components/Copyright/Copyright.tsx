import React from 'react';
import {Container, Row} from 'react-bootstrap';

/**
 * Copyright
 * @return {JSX.Element}
 */
class Copyright extends React.Component<any, any> {
  render = (): JSX.Element => (
    <Container className="bg-b" fluid>
      <Row className="vh-100 align-items-center">
        <h4 className="footertext">
          Copyright © 2020 bclabs Inc. All right reserved.
        </h4>
      </Row>
    </Container>
  );
}

export default Copyright;
