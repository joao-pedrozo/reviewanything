import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export const getToken = () => {
  return localStorage.getItem('authToken');
};

function fetchQuery(operation, variables) {
  return fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    headers: {
      authorization: getToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
