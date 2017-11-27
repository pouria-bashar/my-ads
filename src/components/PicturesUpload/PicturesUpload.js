import React from 'react';
import styles from './PicturesUpload.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { range } from 'lodash';
import Picture from './Picture';

const cx = classNames.bind(styles);

class PicturesUpload extends React.Component {
  state = {
    activeIndex: 0,
  }

  render() {
    const {
      className,
      numberOfElements,
      upload,
      onUploadFinish,
    } = this.props;

    const { activeIndex } = this.state;
    return (
      <div className={cx({ container: true, [className]: !!className })}>
        {
          range(0, numberOfElements).map(index => (
            <Picture
              key={index}
              upload={upload}
              isActive={activeIndex === index}
              onUploadFinish={onUploadFinish}
            />
          ))
        }
      </div>
    );
  }
}
PicturesUpload.propTypes = {
  className: PropTypes.string,
  numberOfElements: PropTypes.number.isRequired,
  upload: PropTypes.func.isRequired,
  onUploadFinish: PropTypes.func.isRequired,
};
PicturesUpload.defauleProps = {
  numberOfElements: 0,
};
export default PicturesUpload;
