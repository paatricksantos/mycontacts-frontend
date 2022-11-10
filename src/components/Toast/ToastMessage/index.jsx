import PropTypes from 'prop-types';
import React from 'react';

import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import { Container } from './styles';

function ToastMessage({ type, text }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  type: PropTypes.oneOf(['default', 'success', 'danger']),
  text: PropTypes.string.isRequired
};

ToastMessage.defaultProps = {
  type: 'default'
};

export default ToastMessage;
