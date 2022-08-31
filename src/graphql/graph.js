import { HttpLink, ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const link = new HttpLink({
  uri: 'https://www.crwn-clothing.com/',
})

export const cartHiddenVar = makeVar(true);
export const cartItemsVar = makeVar([])
export const cartItemsCountVar = makeVar(0)
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      cartHidden: {
        read() {
          return cartHiddenVar()
        },
      },
      cartItems: {
        read() {
          return cartItemsVar()
        },
      },

      cartItemsCount: {
        read() {
          return cartItemsCountVar()
        },
      },
    },
  },
})
export const client = new ApolloClient({
  link,
  cache,
})
