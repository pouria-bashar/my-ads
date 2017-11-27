import gql from 'graphql-tag';

export default gql`
{
  dashboardAdverts {
    id
    title
    description
    price
    images
  }
}
`;
