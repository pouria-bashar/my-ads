import React from 'react';
import styles from './Dashboard.css';
import PropTypes from 'prop-types';
import { AdvertisementCard, SearchBar } from 'components';

const items =  [
  { id: 1, title: 'Item 1', price: 100, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 2, title: 'Item 2', price: 120, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 3, title: 'Item 3', price: 90, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 4, title: 'Item 4', price: 10, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 5, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 6, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 7, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 8, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 9, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 10, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' },
  { id: 11, title: 'Item 5', price: 1000, description: 'Nunc venenatis odio feugiat metus tincidunt facilisis', image: 'https://udemy-images.udemy.com/course/480x270/1109926_7f97_2.jpg' }
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
        <h2>Dashboard</h2>
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
