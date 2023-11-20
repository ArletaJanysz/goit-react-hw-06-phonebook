import React from 'react';
import PropTypes from 'prop-types';

import '../Filter/Filter.css';

const Filter = ({ filter, onChangeFilter }) => (
  <div className="container">
    <input
      className="filter-input"
      type="text"
      placeholder="Filter contacts"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
