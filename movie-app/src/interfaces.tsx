export interface IShow {
  score: number;
  show: any;
}

export interface IShowFiltered {
  id: number;
  name: string;
  rating: number;
  image: string;
  genres: string[];
  summary: string;
}
