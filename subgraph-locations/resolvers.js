const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => dataSources.locationsAPI.getAllLocations(),
    location: (_, { id }, { dataSources }) => dataSources.locationsAPI.getLocation(id)
  },
  Location: {
    __resolveReference: ({ id }, { dataSources }) => dataSources.locationsAPI.getLocation(id)
  }
};

module.exports = resolvers;
