import React from 'react';
import styles from './Dashboard.css';
import PropTypes from 'prop-types';
import { AdvertisementCard, SearchBar } from 'components';
import { random, range } from 'lodash';
import { graphql, compose } from 'react-apollo';
import { queries } from '_graphql';

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


class Dashboard extends React.Component {
  render() {
    const {
      adverts,
    } = this.props;

    const items = adverts.dashboardAdverts || [];

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
Dashboard.propTypes = {
  adverts: PropTypes.object,
};
Dashboard.defaultProps = {
  adverts: {},
};
export default compose(graphql(queries.dashboardAdverts, { name: 'adverts' }))(Dashboard);
