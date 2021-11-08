// import books from "./components/booksapi";
import { gql, useQuery } from '@apollo/client'

import Head from './components/Head';

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
    <Head />
    <h1>
      annotations should be in console...
    </h1>
    </>
  );
}

export default App;
