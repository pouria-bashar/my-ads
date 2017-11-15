import React from 'react';
import styles from './AdvertisementCard.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class AdvertisementCard extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    className: undefined,
  }

  render() {
    const {
      className,
      item,
      onClick,
    } = this.props;
    return (
      <div className={cx({ container: true, [className]: !!className })} tabIndex="0">
        <img src={item.image} alt="" />
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
export default AdvertisementCard;
