export interface IAction {
  type: string;
  payload?: any;
}
export interface ITrendingState {
  gifs: [];
  stickers: [];
}

export interface ISearchParams {
  limit?: number;
  offset?: number;
  q?: string;
  term: string;
  type?: string;
}
