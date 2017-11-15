import React from 'react';
import styles from './PicturesUpload.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Picture extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
  }

  openDialogue() {

  }

  render() {
    const {
      isActive,
    } = this.props;

    return (
      <button className={cx({ item: true, active: isActive })}>
        <input type="file" />
        <i className="material-icons">camera_enhance</i>
      </button>
    );
  }
}
export default Picture;
