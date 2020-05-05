import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({
  onClickPrevious,
  onClickNext,
  disableNext,
  disablePrev,
  currentPage,
  totalPages
}) => {
  return (
    <div>
      <button onClick={onClickPrevious} disable={disablePrev}>prev</button>
      <p>Page {currentPage} of {totalPages}</p>
      <button onClick={onClickNext} disabled={disableNext}>next</button>
    </div>
  );
};

Paging.propTypes = {
  onClickPrevious: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  disableNext: PropTypes.bool.isRequired,
  disablePrev: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paging;
