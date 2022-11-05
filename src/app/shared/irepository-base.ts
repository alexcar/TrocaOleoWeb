import { Observable } from "rxjs";

export interface IRepositoryBase<T> {
  getAll(): Observable<T[]>;
  getById(id: string): Observable<T>;
  create(entity: T): Observable<T>;
  update(id: string, entity: T): Observable<T>;
  delete(id: string): Observable<boolean>;
}
