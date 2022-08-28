import React from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'
import CollectionPage from './collection.component'
import Spinner from '../../components/spinner/spinner.component'

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const CollectionContainer = ({ match }) => {
  console.log('match', match)
  const title = match.params.collectionId
 
  const { loading, error, data } = useQuery(GET_COLLECTIONS_BY_TITLE, {
    variables: { title },
  })
  if (loading) return <Spinner />
  if (error) return `Error! ${error.message}`

  return <CollectionPage collection={data.getCollectionsByTitle} />
}
export default CollectionContainer
