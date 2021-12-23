export interface IAction {
  type: string;
  payload?: any;
}
export interface IGifsState {
  gifs: [];
  loading: boolean;
  error: any;
}
