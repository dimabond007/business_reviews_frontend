export interface Buisness {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  _id: string;
  content: string;
  business: string;
  user: userReview;
  likes: number;
}

interface userReview {
  _id: string;
  username: string;
  imgUrl: string;
}

export interface Like {
  _id: string;
  review: string;
  user: string;
}
