import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, CardBody, Button, InputGroup, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import PaymentsLineChart from './PaymentsLineChart';
import { toast } from 'react-toastify';
import FalconCardHeader from '../common/FalconCardHeader';
import ButtonIcon from '../common/ButtonIcon';

import loadable from '@loadable/component';
const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = () => {
  // State
  const [isSelected, setIsSelected] = useState(false);

  /*useEffect(() => {
    toast(
      <Fragment>
        Welcome to <strong>Falcon React</strong>!<br />
        ReactJS Dashboard and WebApp Template
      </Fragment>
    );
  }, []);*/

  return (
    <Fragment>
      <PaymentsLineChart />
      <Card className="bg-light mb-3">
        <CardBody className="p-3">
          <p className="fs--1 mb-0">
            <Link to="#!">
              <FontAwesomeIcon icon="exchange-alt" transform="rotate-90" className="mr-2" />A payout for{' '}
              <strong>$921.42</strong> was deposited 13 days ago
            </Link>
            . Your next deposit is expected on <strong>Tuesday, March 13.</strong>
          </p>
        </CardBody>
      </Card>
      <div className="card-deck">
        <CardSummary rate="-0.23%" title="Clientes" color="warning" linkText="Ver todo">
          58.39k
        </CardSummary>
        <CardSummary rate="0.0%" title="Órdenes" color="info" linkText="Todas las órdenes">
          73.46k
        </CardSummary>
        <CardSummary content="43,594" rate="9.54%" title="Ganancia" color="success" linkText="Estadísticas">
          <CountUp end={43594} duration={5} prefix="$" separator="." decimal="," />
        </CardSummary>
      </div>
      <Card className="mb-3">
        <FalconCardHeader title="Recent Purchases" light={false}>
          {isSelected ? (
            <InputGroup size="sm" className="input-group input-group-sm">
              <CustomInput type="select" id="bulk-select">
                <option>Bulk actions</option>
                <option value="Refund">Refund</option>
                <option value="Eliminar">Eliminar</option>
                <option value="Archive">Archive</option>
              </CustomInput>
              <Button color="falcon-default" size="sm" className="ml-2">
                Apply
              </Button>
            </InputGroup>
          ) : (
            <Fragment>
              <ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
                New
              </ButtonIcon>
              <ButtonIcon icon="filter" transform="shrink-3 down-2" color="falcon-default" size="sm" className="mx-2">
                Filter
              </ButtonIcon>
              <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="falcon-default" size="sm">
                Export
              </ButtonIcon>
            </Fragment>
          )}
        </FalconCardHeader>
        <CardBody className="p-0">
          <PurchasesTable setIsSelected={setIsSelected} />
        </CardBody>
      </Card>
      <Row noGutters>
        <Col lg="4" className="pr-lg-2">
          <ActiveUsersBarChart />
        </Col>
        <Col lg="8" className="pl-lg-2">
          <ActiveUsersMap />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
