import React, { Fragment, createRef } from 'react';
import PropTypes from 'prop-types';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import Badge from 'reactstrap/es/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Row } from 'reactstrap';
import ButtonIcon from '../common/ButtonIcon';
import { Link } from 'react-router-dom';

import purchases from '../../data/dashboard/purchaseList';

const CustomTotal = ({ sizePerPage, totalSize, page, lastIndex }) => (
  <span>
    {(page - 1) * sizePerPage + 1} to {lastIndex > totalSize ? totalSize : lastIndex} of {totalSize} —{' '}
  </span>
);

const customerFormatter = customerName => (
  <Link to="pages/customer-details" className="font-weight-semi-bold">
    {customerName}
  </Link>
);

const badgeFormatter = status => {
  let color = '';
  let icon = '';
  let text = '';
  switch (status) {
    case 'success':
      color = 'success';
      icon = 'check';
      text = 'Success';
      break;
    case 'blocked':
      color = 'secondary';
      icon = 'ban';
      text = 'Blocked';
      break;
    default:
      color = 'warning';
      icon = 'stream';
      text = 'Pendiente';
  }
  return (
    <Badge color={`soft-${color}`} className="rounded-capsule fs--1">
      {text}
      <FontAwesomeIcon icon={icon} transform="shrink-2" className="ml-1" />
    </Badge>
  );
};

const amountFormatter = amount => <Fragment>${amount}</Fragment>;

const columns = [
  {
    dataField: 'customer',
    text: 'Cliente',
    formatter: customerFormatter,
    sort: true
  },
  {
    dataField: 'email',
    text: 'Email',
    sort: true
  },
  {
    dataField: 'product',
    text: 'Producto',
    sort: true
  },
  {
    dataField: 'status',
    text: 'Payment',
    formatter: badgeFormatter,
    sort: true
  },
  {
    dataField: 'amount',
    text: 'Amount',
    formatter: amountFormatter,
    sort: true,
    align: 'right',
    headerAlign: 'right'
  },
  {
    dataField: 'action',
    text: ''
  }
];

const SelectRowInput = ({ indeterminate, rowIndex, ...rest }) => (
  <div className="custom-control custom-checkbox">
    <input
      className="custom-control-input"
      {...rest}
      onChange={() => {}}
      ref={input => {
        if (input) input.indeterminate = indeterminate;
      }}
    />
    <label className="custom-control-label" />
  </div>
);

const selectRow = onSelect => ({
  mode: 'checkbox',
  clickToSelect: false,
  selectionHeaderRenderer: ({ mode, ...rest }) => <SelectRowInput type="checkbox" {...rest} />,
  selectionRenderer: ({ mode, ...rest }) => <SelectRowInput type={mode} {...rest} />,
  onSelect: onSelect,
  onSelectAll: onSelect
});

const options = {
  custom: true,
  sizePerPage: 6,
  totalSize: purchases.length
};

const PurchasesTable = ({ setIsSelected }) => {
  let table = createRef();
  const handleNextPage = ({ page, onPageChange }) => () => {
    onPageChange(page + 1);
  };

  const handlePrevPage = ({ page, onPageChange }) => () => {
    onPageChange(page - 1);
  };

  const handleViewAll = ({ onSizePerPageChange }, newSizePerPage) => {
    onSizePerPageChange(newSizePerPage, 1);
  };

  const onSelect = () => {
    setImmediate(() => {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  return (
    <PaginationProvider pagination={paginationFactory(options)}>
      {({ paginationProps, paginationTableProps }) => {
        const lastIndex = paginationProps.page * paginationProps.sizePerPage;

        return (
          <Fragment>
            <div className="table-responsive">
              <BootstrapTable
                ref={table}
                bootstrap4
                keyField="id"
                data={purchases}
                columns={columns}
                selectRow={selectRow(onSelect)}
                bordered={false}
                classes="table-dashboard table-sm fs--1 border-bottom mb-0 table-dashboard-th-nowrap"
                rowClasses="btn-reveal-trigger"
                headerClasses="bg-200 text-900"
                {...paginationTableProps}
              />
            </div>
            <Row noGutters className="px-1 py-3">
              <Col className="pl-3 fs--1">
                <CustomTotal {...paginationProps} lastIndex={lastIndex} />
                <ButtonIcon
                  color="link"
                  size="sm"
                  icon="chevron-right"
                  iconAlign="right"
                  transform="down-1 shrink-4"
                  className="px-0 font-weight-semi-bold"
                  onClick={() => handleViewAll(paginationProps, purchases.length)}
                >
                  view all
                </ButtonIcon>
              </Col>
              <Col xs="auto" className="pr-3">
                <Button
                  color={paginationProps.page === 1 ? 'light' : 'primary'}
                  size="sm"
                  onClick={handlePrevPage(paginationProps)}
                  disabled={paginationProps.page === 1}
                >
                  Anterior
                </Button>
                <Button
                  color={lastIndex >= paginationProps.totalSize ? 'light' : 'primary'}
                  size="sm"
                  className="ml-2 px-4"
                  onClick={handleNextPage(paginationProps)}
                  disabled={lastIndex >= paginationProps.totalSize}
                >
                  Siguiente
                </Button>
              </Col>
            </Row>
          </Fragment>
        );
      }}
    </PaginationProvider>
  );
};

PurchasesTable.propTypes = { value: PropTypes.any };

PurchasesTable.defaultProps = { value: `PurchasesTable` };

export default PurchasesTable;
