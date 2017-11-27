import React from 'react';
import styles from './AutoComplete.css';
import PropTypes from 'prop-types';

class Options extends React.Component {
  renderOption(option) {
    const { onOptionSelect } = this.props;
    return (
      <div
        key={option.label}
        className={styles.option}
        onClick={(e) => onOptionSelect(option, e)}
      >
        {option.label}
      </div>
    );
  }
  render() {
    const { options } = this.props;
    return (
      <div className={styles.optionsContainer}>
        {
          options.map(option => this.renderOption.bind(this)(option))
        }
      </div>
    );
  }
}
Options.propTypes = {
  options: PropTypes.array.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
};
export default Options;
