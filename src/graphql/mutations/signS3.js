import gql from 'graphql-tag';

export default gql`
  mutation SignS3($fileName: String, $fileType: String) {
    signS3(fileName: $fileName, fileType: $fileType) {
      url
      signRequest
    }
  }
`;
