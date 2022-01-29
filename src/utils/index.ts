export type Path =
  | '/'
  | '/contact'
  | '/gallery'
  | '/todos'
  | '/news/{permalink}';

export const path = <P extends Path>(path: P) => {
  return path;
};
