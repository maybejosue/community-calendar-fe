import gql from 'graphql-tag'

export const GET_CACHE = gql`
  query GetCache {
    locationPermission @client
    userLatitude @client
    userLongitude @client
    userAddress @client
    maxDistance @client
  }
`

export const GET_RECENT_SEARCHES = gql`
  query GetRecentSearches {
    recentSearches @client {
      index
      location {
        userLatitude
        userLongitude
        radius
      }
      tags
      ticketPrice {
        minPrice
        maxPrice
      }
      dateRange {
        start
        end
      }
    }
  }
`
