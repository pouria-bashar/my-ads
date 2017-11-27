import React from 'react';
import styles from './AdvertisementCard.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Carousel from './Carousel';

const cx = classNames.bind(styles);

class AdvertisementCard extends React.Component {
  render() {
    const {
      className,
      item,
      onClick,
      readOnly,
      style,
    } = this.props;
    return (
      <div
        className={cx({ container: true, [className]: !!className, readOnly })}
        style={style || {}}
        tabIndex="0"
      >
        <Carousel images={item.images} />
        <div className={styles.content}>
          <div className={styles.title}>
            {item.title}
          </div>
          <div className={styles.description}>
            {item.description}
          </div>
          <div className={styles.price}>
            {`$${item.price}`}
          </div>
        </div>
      </div>
    );
  }
}

AdvertisementCard.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
};

AdvertisementCard.defaultProps = {
  className: undefined,
};
export default AdvertisementCard;
