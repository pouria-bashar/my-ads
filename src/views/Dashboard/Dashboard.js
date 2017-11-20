import React from 'react';
import styles from './Dashboard.css';
import PropTypes from 'prop-types';
import { AdvertisementCard, SearchBar } from 'components';
import { random, range } from 'lodash';

const images = [
  'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg',
  'https://udemy-images.udemy.com/course/240x135/1023062_948a_4.jpg',
  'https://udemy-images.udemy.com/course/240x135/882872_61d1_2.jpg',
  'https://udemy-images.udemy.com/course/240x135/446134_383c_2.jpg',
  'https://udemy-images.udemy.com/course/240x135/821312_7b15_4.jpg',
  'https://udemy-images.udemy.com/course/240x135/24823_963e_14.jpg',
  'https://udemy-images.udemy.com/course/240x135/1286908_1773_4.jpg',
  'https://udemy-images.udemy.com/course/240x135/732464_7cf6_2.jpg',
];

const randomImage = () => images[random(0, images.length - 1)];
const listOfImages = () => range(0, 4).map(() => randomImage());

const items =
 [
  {
    id: 1,
    title: 'Item 1',
    price: 100,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 2,
    title: 'Item 2',
    price: 120,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 3,
    title: 'Item 3',
    price: 90,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 4,
    title: 'Item 4',
    price: 10,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 5,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 6,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 7,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 8,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 9,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 10,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 11,
    title: 'Item 5',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
  {
    id: 12,
    title: 'Item 6',
    price: 1000,
    description: 'Nunc venenatis odio feugiat metus tincidunt facilisis',
    images: listOfImages(),
  },
];

class Dashboard extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  };
  static defaultProps = {
    items,
  };

  render() {
    const {
      items,
    } = this.props;
    return (
      <div className={styles.container}>
        <h1>View Ads</h1>
        <form>
          <SearchBar style={{ width: '100%' }} />
        </form>
        <div className={styles.items}>
          {
            items.map(item => (
              <AdvertisementCard item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    );
  }
}
export default Dashboard;
