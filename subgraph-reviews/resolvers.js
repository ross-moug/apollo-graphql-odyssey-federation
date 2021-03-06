const resolvers = {
  Query: {
    latestReviews: (_, __, { dataSources }) => dataSources.reviewsAPI.getLatestReviews()
  },
  Location: {
    overallRating: ({ id }, _, { dataSources }) => dataSources.reviewsAPI.getOverallRatingForLocation(id),
    reviews: ( { id }, _, { dataSources }) => dataSources.reviewsAPI.getReviewsForLocation(id)
  },
  Review: {
    location: ({ locationId }) => ({ id: locationId })
  },
  Mutation: {
    submitReview: (_, { review }, { dataSources }) => {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(review);
      return {code: 200, success: true, message: 'success', review: newReview};
    }
  }
};

module.exports = resolvers;
