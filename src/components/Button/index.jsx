import PropTypes from 'prop-types';
import React from 'react';

import Spinner from '../Spinner';
import { StyledButton } from './styles';

function Button({ type, disabled, isLoading, children }) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={22} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false
};

export default Button;
