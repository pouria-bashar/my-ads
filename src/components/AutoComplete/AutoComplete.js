import React from 'react';
import styles from './AutoComplete.css';
import PropTypes from 'prop-types';
import Options from './Options';
import SelectedOption from './SelectedOption';
import { isEmpty, find } from 'lodash';

const filterItems = (selectedItems, items) => items.filter(item => isEmpty(find(selectedItems, { value: item.value })));

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      selectedOptions: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderSelectedOptions = this.renderSelectedOptions.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.moveItem = this.moveItem.bind(this);
    this.addSelectedItem = this.addSelectedItem.bind(this);
    this.removeSelectedItem = this.removeSelectedItem.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  renderSelectedOptions() {
    return this.state.selectedOptions
    .map(option => (
      <SelectedOption
        option={option}
        key={option.value}
        onOptionRemove={this.removeSelectedItem}
      />
    ));
  }

  moveItem(index) {
    const { selectedIndex } = this.state;
    this.setState({ selectedIndex: selectedIndex + index });
  }

  addSelectedItem(option, e) {
    e.preventDefault();
    const { selectedOptions } = this.state;
    this.setState({ selectedOptions: [...selectedOptions, option] });
  }

  removeSelectedItem(option) {
    const { selectedOptions } = this.state;
    this.setState({
      selectedOptions: selectedOptions.filter(_option => _option.value !== option.value),
    });
  }

  handleKeyDown(e) {
    const { key } = e;
    switch (key) {
      case 'ArrowDown':
        this.moveItem(-1);
        break;
      case 'ArrowUp':
        this.moveItem(1);
        break;
      default:
        break;
    }
  }

  handleClick(e) {
    if (this.container.contains(e.target)) {
      const { showOptions } = this.state;
      if (!showOptions) {
        this.setState({ showOptions: true });
      }
      this.input.focus();
    } else {
      if (this.state.showOptions) {
        // IF Blur
        if (this.props.onBlur) {
          this.props.onBlur(this.state.selectedOptions);
        }
      }
      this.setState({ showOptions: false });
    }
  }
  render() {
    const { options } = this.props;
    const { showOptions, selectedOptions } = this.state;
    const filteredOptions = filterItems(selectedOptions, options);
    return (
      <div
        className={styles.container}
        onClick={this.handleClick}
        ref={(el) => { this.container = el; }}
      >
        <div
          onKeyDown={this.handleKeyDown}
          className={styles.inputContainer}
        >
          {!isEmpty(selectedOptions) && this.renderSelectedOptions()}
          <input type="text" ref={(el) => { this.input = el; }} />
        </div>
        {showOptions && <Options onOptionSelect={this.addSelectedItem} options={filteredOptions} />}
      </div>
    );
  }
}
AutoComplete.propTypes = {
  options: PropTypes.array.isRequired,
  onBlur: PropTypes.func,
};
export default AutoComplete;
