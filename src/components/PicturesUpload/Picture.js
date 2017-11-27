import React from 'react';
import styles from './PicturesUpload.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import axios from 'axios';

const cx = classNames.bind(styles);

class Picture extends React.Component {
  state = {
    loading: false,
    path: '',
  }

  handleUpload(file) {
    // Get signed request
    const { upload, onUploadFinish } = this.props;
    this.setState({ loading: true });
    upload({ variables: { fileName: file.name, fileType: file.type } })
    .then(async resp => {
      const { signRequest, url } = resp.data.signS3;
      const options = { headers: { 'Content-Type': file.type } };
      await axios.put(signRequest, file, options);
      this.setState({ loading: false, path: url });
      onUploadFinish(url);
    });
  }
  render() {
    const {
      isActive,
    } = this.props;

    const { loading, path } = this.state;

    const loadingClass = cx({
      'material-icons': true,
      spin: true,
    });

    return (
      <div className={cx({ item: true, active: isActive })}>
        <input
          onChange={(e) => {
            const file = e.target.files[0];
            this.handleUpload.bind(this)(file);
          }}
          type="file"
        />
        {(!path && !loading) && <i className="material-icons">camera_enhance</i>}
        {loading && <i className={loadingClass}>loop</i>}
        {path && <img src={path} alt="Images" /> }
      </div>
    );
  }
}
Picture.propTypes = {
  isActive: PropTypes.bool,
  upload: PropTypes.func.isRequired,
  onUploadFinish: PropTypes.func.isRequired,
};
export default Picture;
