interface IReview {
  id: number | string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  comment: string;
  isFeatured?: boolean;
}
