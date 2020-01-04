import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.css";

const Dot = ({ className, color, margin, size }) => {
  const renderStyle = {
    backgroundColor: color,
    height: `${size}px`,
    margin: `${margin}px`,
    width: `${size}px`
  };
  return (
    <div
      className={classNames(className, styles.dot)}
      style={renderStyle}
    ></div>
  );
};

Dot.defaultProps = {
  color: "red",
  margin: 3,
  size: 13
};

Dot.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.number,
  size: PropTypes.number
};

export default Dot;
