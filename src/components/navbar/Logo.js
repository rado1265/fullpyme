import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logos/abc_logo.png';

const Logo = ({ at, width, className, ...rest }) => {
  return (
    <Link
      to="/"
      className={classNames(
        'text-decoration-none',
        { 'navbar-brand text-left': at === 'navbar-vertical' },
        { 'navbar-brand text-left ml-3': at === 'navbar-top' }
      )}
      {...rest}
    >
      <div
        className={classNames(
          'd-flex',
          {
            'align-items-center py-3': at === 'navbar-vertical',
            'align-items-center': at === 'navbar-top',
            'flex-center font-weight-extra-bold fs-5 mb-4': at === 'auth'
          },
          className
        )}
      >
        <img className="mr-2 w-50 w-md-100" src={logo} alt="Logo" />
        <span className="text-sans-serif"></span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  at: PropTypes.oneOf(['navbar-vertical', 'navbar-top', 'auth']),
  width: PropTypes.number,
  className: PropTypes.string
};

Logo.defaultProps = { at: 'auth', width: 58 };

export default Logo;
