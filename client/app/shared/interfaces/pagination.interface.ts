export interface PaginatedResponse<T> {
  data: T[];
  offset: number;
  limit: number;
  total: number;
}
