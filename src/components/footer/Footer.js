import React from 'react';
import { Col, Row } from 'reactstrap';
import { version } from '../../config';

const Footer = () => (
  <footer>
    <Row noGutters className="justify-content-between text-center fs--1 mt-4 mb-3">
      <Col sm="auto">
        <p className="mb-0 text-600">
        RV Soluciones <span className="d-none d-sm-inline-block">| </span>
          <br className="d-sm-none" /> {new Date().getFullYear()} &copy; <a>RV Soluciones</a>
        </p>
      </Col>
      <Col sm="auto">
        <p className="mb-0 text-600">v{version}</p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
