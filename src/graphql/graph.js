import { HttpLink, ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const link = new HttpLink({
  uri: 'https://www.crwn-clothing.com/',
})

export const cartHiddenVar = makeVar(true);
const cache = new InMemoryCache({ 
  typePolicies: {
    Query: {
      cartHidden: {
          read() {
            return cartHiddenVar();
          }
        }
      }
  }
})
export const client = new ApolloClient({
  link,
  cache,
})
