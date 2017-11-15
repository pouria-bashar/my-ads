import React from 'react';
import styles from './Stepper.css';
import Step from './Step';
import PropTypes from 'prop-types';

class Stepper extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    activeStep: PropTypes.number.isRequired,
  };


  renderChildren(children, activeStep) {
    const childrenWithProps = React.Children.map(
      children,
       (child, index) => {
         if (child) {
           return React.cloneElement(child, {
             isExpanded: activeStep === index,
             index,
           });
         }
         return null;
       },
      );
      return childrenWithProps;
  }

  render() {
    const {
      children,
      activeStep,
    } = this.props;
    return (
      <div className={styles.container}>
        {this.renderChildren(children, activeStep)}
      </div>
    );
  }
}

Stepper.Step = Step;
export default Stepper;
