import React from 'react';
import ReactDOM from 'react-dom'

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'

import './index.css'
import App from './App'
const link = new HttpLink({
  uri: 'https://www.crwn-clothing.com/',
})
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
