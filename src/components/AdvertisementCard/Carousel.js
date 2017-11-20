import React from 'react';
import styles from './AdvertisementCard.css';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  static propTypes = {
    images: PropTypes.array,
  };

  state = {
    imageIndex: 0,
  }

  handleNavigation(index) {
    const { images } = this.props;
    const { imageIndex } = this.state;
    const result = imageIndex + index;
    if (result >= images.length || result < 0) return;
    this.setState({ imageIndex: result });
  }
  render() {
    const { images } = this.props;
    const { imageIndex } = this.state;
    return (
      <div className={styles.carousel}>
        <i
          className="material-icons"
          onClick={() => this.handleNavigation.call(this, -1)}
        >keyboard_arrow_left
        </i>
        <i
          className="material-icons"
          onClick={() => this.handleNavigation.call(this, 1)}
        >keyboard_arrow_right
        </i>
        <div className={styles.images}>
          {
            images.map((image, index) => (
              <img
                style={{ display: imageIndex === index ? 'block' : 'none' }}
                key={index}
                src={image}
                alt=""
              />
            ))
          }
        </div>
      </div>
    );
  }
}
export default Carousel;
