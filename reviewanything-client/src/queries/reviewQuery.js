import graphql from 'babel-plugin-relay/macro';

const query = graphql`
    query reviewQuery($id: String){
    review(id: $id){
        _id
        title
        overall
    }
}
`;

export default query;