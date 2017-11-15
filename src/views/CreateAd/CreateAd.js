import React from 'react';
import styles from './CreateAd.css';
import { Stepper, Button, TextField, PicturesUpload, TextArea } from 'components';

const { Step } = Stepper;

class CreateAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }

  navigate(index) {
    this.setState({ activeStep: this.state.activeStep + index });
  }

  renderActions() {
    const { activeStep } = this.state;
    const renderNext = activeStep >= 0 && activeStep <= 3;
    const renderPrevious = activeStep > 0 && activeStep <= 3;
    const renderFinish = activeStep === 4;

    return (
      <div className={styles.actions}>
        {
          renderNext && <Button text="Next" style={{ marginRight: '8px' }} onClick={() => this.navigate(1)} />
        }
        {
          renderPrevious && <Button text="Previous" onClick={() => this.navigate(-1)} />
        }
        {
          renderFinish && <Button text="Post Ad" onClick={() => this.navigate(-1)} />
        }
      </div>
    );
  }

  render() {
    const { activeStep } = this.state;
    return (
      <div className={styles.container}>
        <h2>Create an Ad</h2>
        <Stepper activeStep={activeStep}>
          <Step title="Enter title">
            <TextField label="Title" />
            {this.renderActions.bind(this)()}
          </Step>
          <Step title="Enter Description">
            <TextArea label="Description" />
            {this.renderActions.bind(this)()}
          </Step>
          <Step title="Enter Price">
            <TextField style={{ maxWidth: '200px' }} label="Price" />
            {this.renderActions.bind(this)()}
          </Step>
          <Step title="Upload Photos">
            <PicturesUpload numberOfElements={4} />
            {this.renderActions.bind(this)()}
          </Step>
          <Step title="Review">
            Review
            {this.renderActions.bind(this)()}
          </Step>
        </Stepper>
      </div>
    );
  }
}
export default CreateAd;
