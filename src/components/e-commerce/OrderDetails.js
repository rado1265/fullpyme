import React, { Fragment, useContext } from 'react';
import PageHeader from '../common/PageHeader';
import { Badge, Col, Table, Card, CardBody, Row, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTotalPrice } from '../../helpers/utils';
import AppContext from '../../context/Context';

import visa from '../../assets/img/icons/visa.jpg';

import orderedProducts from '../../data/e-commerce/orderedProducts';

const OrderDetails = () => {
  const { currency } = useContext(AppContext);
  const subtotal = getTotalPrice(orderedProducts, orderedProducts);

  return (
    <Fragment>
      <PageHeader title="Order Details: #2737" titleTag="h5" className="mb-3">
        <p className="fs--1 mt-1">April 21, 2019, 5:33 PM</p>
        <div>
          <strong className="mr-2">Estado: </strong>
          <Badge color="soft-success" pill className="fs--2">
            Completado
            <FontAwesomeIcon icon="check" transform="shrink-2" className=" ml-1" />
          </Badge>
        </div>
      </PageHeader>

      <Card className="mb-3">
        <CardBody>
          <Row>
            <Col lg={4}>
              <h5 className="mb-3 fs-0">Datos de facturación</h5>
              <h6 className="mb-2">Antony Hopkins</h6>
              <p className="mb-1 fs--1">
                2393 Main Avenue
                <br />
                Penasauka, New Jersey 87896
              </p>
              <p className="mb-0 fs--1">
                <strong>Email: </strong>
                <a href="mailto:ricky@gmail.com">antony@example.com</a>
              </p>
              <p className="mb-0 fs--1">
                <strong>Phone: </strong>
                <a href="tel:7897987987">7897987987</a>
              </p>
            </Col>
            <Col lg={4}>
              <h5 className="mb-3 fs-0">Shipping Address</h5>
              <h6 className="mb-2">Antony Hopkins</h6>
              <p className="mb-0 fs--1">
                2393 Main Avenue
                <br />
                Penasauka, New Jersey 87896
              </p>
              <div className="text-500 fs--1">(Free Shipping)</div>
            </Col>
            <Col lg={4}>
              <h5 className="mb-3 fs-0">Payment Method</h5>
              <Media>
                <img className="mr-3" src={visa} width="40" alt="" />
                <Media body>
                  <h6 className="mb-0">Antony Hopkins</h6>
                  <p className="mb-0 fs--1">**** **** **** 9809</p>
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardBody>
          <div className="table-responsive fs--1">
            <Table striped className="border-bottom">
              <thead className="bg-200 text-900">
                <tr>
                  <th className="border-0">Productos</th>
                  <th className="border-0 text-center">Cantidad</th>
                  <th className="border-0 text-right">Valor unitario</th>
                  <th className="border-0 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderedProducts.map(({ id, title, description, quantity, price }) => (
                  <tr key={id}>
                    <td className="align-middle">
                      <h6 className="mb-0 text-nowrap">{title}</h6>
                      <p className="mb-0">{description}</p>
                    </td>
                    <td className="align-middle text-center">{quantity}</td>
                    <td className="align-middle text-right">
                      {currency}
                      {price}
                    </td>
                    <td className="align-middle text-right">
                      {currency}
                      {price * quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Row className="row no-gutters justify-content-end">
            <div className="col-auto">
              <table className="table table-sm table-borderless fs--1 text-right">
                <tbody>
                  <tr>
                    <th className="text-900">Subtotal:</th>
                    <td className="font-weight-semi-bold">
                      {currency}
                      {subtotal}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-900">Tax 5%:</th>
                    <td className="font-weight-semi-bold">
                      {currency}
                      {subtotal * 0.05}
                    </td>
                  </tr>
                  <tr className="border-top">
                    <th className="text-900">Total:</th>
                    <td className="font-weight-semi-bold">
                      {currency}
                      {subtotal * 1.05}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default OrderDetails;
