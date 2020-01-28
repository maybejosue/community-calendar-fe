import gql from 'graphql-tag'

export const typeDefs = gql`
  input TicketPrice {
    ticketPrice: Float!
  }

  input EventCreateTagInput {
    title: String!
  }

  input EventCreateImageInput {
    url: String!
  }

  type SearchFilters {
    index: String
    location: LocationFilters
    tags: [String!]
    ticketPrice: [PriceFilters!]
    dateRange: DateFilters
  }

  type RecentSearches {
    recentSearches: [SearchFilters!]
  }

  type PriceFilters {
    minPrice: Int
    maxPrice: Int
  }

  type DateFilters {
    start: DateTime!
    end: DateTime!
  }

  type LocationFilters {
    userLatitude: Float!
    userLongitude: Float!
    radius: Int!
  }

  extend type Query {
    maxDistance: Int
    locationPermission: Boolean!
    userLatitude: Float
    userLongitude: Float
    userAddress: String
    userId: String
    recentSearches: [RecentSearches!]
  }
`
