import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  id: PropTypes.any.isRequired,
  onCollapseClick: PropTypes.func.isRequired,
};

export default class Collapse extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    this.props.onCollapseClick(e, this.props.id)
  }

  render() {
    return (
      <g onClick={this.onClick}>
        <circle cx="70" r="13" stroke="#4e5d6c" fillOpacity="0"></circle>
        <path d="M 65 0 H 75" stroke="#fff" strokeWidth="2px" />
        {this.props.collapsed && <path d="M 70 5 V -5" stroke="#fff" strokeWidth="2px" />}
      </g>
    );
  }
}

Collapse.propTypes = propTypes;