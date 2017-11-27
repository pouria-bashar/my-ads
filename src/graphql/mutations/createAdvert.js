import gql from 'graphql-tag';

export default gql`
  mutation AddAdvertToUser($title: String, $description: String, $price: Float, $images: [String]){
    addAdvertToUser(title:$title, description:$description, price:$price, images:$images) {
      id,
      title
    }
  }
`;
