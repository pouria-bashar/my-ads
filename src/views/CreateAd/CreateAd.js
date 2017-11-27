import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateAd.css';
import { Stepper, Button, TextField, PicturesUpload, TextArea, AutoComplete, AdvertisementCard } from 'components';
import { graphql, compose } from 'react-apollo';
import { mutations, queries } from '_graphql';
import * as selectors from 'selectors';
import { isEmpty } from 'lodash';

const { Step } = Stepper;

const initialValues = {
  title: '',
  description: '',
  price: '',
  images: [],
};

class CreateAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      ...initialValues,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.isNextDisabled = this.isNextDisabled.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  navigate(index) {
    this.setState({ activeStep: this.state.activeStep + index });
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addImage(imageUrl) {
    const { images } = this.state;
    this.setState({ images: [...images, imageUrl] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      title,
      description,
      price,
      images,
    } = this.state;
    const variables = {
      title,
      description,
      price: parseFloat(price),
      images,
    };
    this.props.createAdvert({ variables, refetchQueries: [{ query: queries.dashboardAdverts }] })
    .then(() => this.props.history.push('/'))
    .catch(err => console.log(err));
  }

  isNextDisabled() {
    const { activeStep } = this.state;
    switch (activeStep) {
      case 0:
        return isEmpty(this.state.title);
      case 1:
        return isEmpty(this.state.description);
      default: return false;
    }
  }

  renderActions() {
    const { activeStep } = this.state;
    const renderNext = activeStep >= 0 && activeStep <= 4;
    const renderPrevious = activeStep > 0 && activeStep <= 4;
    const renderFinish = activeStep === 5;

    return (
      <div className={styles.actions}>
        {
          renderNext && (
            <Button
              text="Next"
              style={{ marginRight: '8px' }}
              disabled={this.isNextDisabled()}
              onClick={() => this.navigate(1)}
            />
          )
        }
        {
          renderPrevious && (
            <Button
              text="Previous"
              onClick={() => this.navigate(-1)}
            />
          )
        }
        {
          renderFinish && (
            <Button
              type="submit"
              text="Post Ad"
              style={{ marginTop: '16px' }}
            />
          )
        }
      </div>
    );
  }

  render() {
    const { activeStep, images } = this.state;
    const { categoryOptions } = this.props;
    return (
      <div className={styles.container}>
        <h2>Create an Ad</h2>
        <form onSubmit={this.handleSubmit}>
          <Stepper activeStep={activeStep}>
            <Step title="Enter title">
              <TextField
                label="Title"
                name="title"
                onChange={this.handleInputChange}
                value={this.state.title}
              />
              {this.renderActions.bind(this)()}
            </Step>
            <Step title="Enter Description">
              <TextArea
                label="Description"
                name="description"
                onChange={this.handleInputChange}
                value={this.state.description}
              />
              {this.renderActions.bind(this)()}
            </Step>
            <Step title="Select category">
              <AutoComplete
                label="Category"
                name="category"
                options={categoryOptions}
                onChange={this.handleInputChange}
                value={this.state.title}
              />
              {this.renderActions.bind(this)()}
            </Step>
            <Step title="Enter Price">
              <TextField
                style={{ maxWidth: '200px' }}
                label="Price"
                name="price"
                format="numeric"
                icon="attach_money"
                onChange={this.handleInputChange}
                value={this.state.price}
              />
              {this.renderActions.bind(this)()}
            </Step>
            <Step title="Upload Photos">
              <PicturesUpload
                numberOfElements={4}
                images={images}
                upload={this.props.signS3}
                onUploadFinish={this.addImage}
              />
              {this.renderActions.bind(this)()}
            </Step>
            <Step title="Review">
              <AdvertisementCard item={this.state} readOnly />
              {this.renderActions.bind(this)()}
            </Step>
          </Stepper>
        </form>
      </div>
    );
  }
}
CreateAd.propTypes = {
  createAdvert: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  signS3: PropTypes.func.isRequired,
};
export default compose(
  graphql(mutations.createAdvert, { name: 'createAdvert' }),
  graphql(mutations.signS3, { name: 'signS3' }),
  graphql(queries.categories, { props: ({ data }) => selectors.getCategories(data) }),
)(CreateAd);
