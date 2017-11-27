import React from 'react';
import styles from './SearchBar.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class SearchBar extends React.Component {
  render() {
    const {
      className,
      style,
    } = this.props;
    return (
      <div style={style} className={cx({ container: true, [className]: !!className })}>
        <input id="input" type="text" />
        <button>
          <i className="material-icons">search</i>
        </button>
      </div>
    );
  }
}
SearchBar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
SearchBar.defaultProps = {
  className: undefined,
};
export default SearchBar;
