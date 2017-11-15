import React from 'react';
import styles from './PicturesUpload.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { range } from 'lodash';
import Picture from './Picture';

const cx = classNames.bind(styles);

class PicturesUpload extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    numberOfElements: PropTypes.number.isRequired,
  }

  static defauleProps = {
    numberOfElements: 0,
  }

  state = {
    activeIndex: 0,
  }

  render() {
    const {
      className,
      numberOfElements,
    } = this.props;

    const { activeIndex } = this.state;
    return (
      <div className={cx({ container: true, [className]: !!className })}>
        {
          range(0, numberOfElements).map(index => (
            <Picture
              key={index}
              isActive={activeIndex === index}
            />
          ))
        }
      </div>
    );
  }
}
export default PicturesUpload;
