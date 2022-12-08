export enum method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

export enum collection {
  USER = 'users',
}

export type ApiResponse<T> = {
  code: number;
  message: string;
  data?: T;
};
