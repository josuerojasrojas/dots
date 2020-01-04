import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.css";
import Dot from "components/Dot";

const DotsCollection = ({ className, length, width, colorFunction }) => {
  const renderDots = (_length, _width) => {
    const dotAllRows = [];
    const total = _length * _width;
    let dotNum = 0;
    // TODO: add callback function that would create the constants needed for the function so they wouldn't be created everytime a function may need something
    // something like const colorFunctionConst = (a, b c) => {return {length: a*2, height: b / 2, circumferenceF: c * Math.PI,  radiusShort: a* b * c}}()
    // and that const just gets passed to colorFunction avoiding multiple math stuff
    for (let i = 0; i < _length; i++) {
      const dotRow = [];
      for (let j = 0; j < _width; j++) {
        // this is all the basic data pass down to the gunction
        const dataColorFunction = {
          length: _length,
          pos: dotNum++,
          total,
          width: _width,
          x: j,
          y: i
        };
        dotRow.push(
          <Dot key={`dot-${i}-${j}`} color={colorFunction(dataColorFunction)} />
        );
      }
      dotAllRows.push(
        <div className={styles.dotRow} key={`row-${i}`}>
          {dotRow}
        </div>
      );
    }
    return dotAllRows;
  };

  return (
    <div className={classNames(className, styles.dotsCollection)}>
      {renderDots(length, width)}
    </div>
  );
};

DotsCollection.defaultProps = {
  colorFunction: i => `rgb(${i}, ${i * 4}, ${i * 3})`,
  length: 12,
  width: 12
};

DotsCollection.propTypes = {
  className: PropTypes.string,
  colorFunction: PropTypes.func,
  length: PropTypes.number,
  width: PropTypes.number
};

export default DotsCollection;
