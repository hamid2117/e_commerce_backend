const agg = [
  {
    $match: {
      product: new ObjectId('615c873ad584c748cc86e5bb'),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: '$rating',
      },
      numberOfReviews: {
        $sum: 1,
      },
    },
  },
]
