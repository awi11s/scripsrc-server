// import books from "./components/booksapi";
import { gql, useQuery } from '@apollo/client'

import ChapDisplay from './components/ChapDisplay';

const GET_ANNOTS = gql`
  query {
    getAnnots {
      body
      username
      book
      chapter
      verse
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ANNOTS);

  if (loading) return 'Loading...';
  if (error) return `error! ${error.message}`;
  console.log(data.getAnnots)

  return (
    <>
    <h1>
      annotations should be in console...
    </h1>
    <ChapDisplay />
    </>
  );
}

export default App;