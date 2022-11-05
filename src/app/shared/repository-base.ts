import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IRepositoryBase } from "./irepository-base";

export abstract class RepositoryBase<T> implements IRepositoryBase<T> {

  constructor(protected http: HttpClient, protected route: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.createCompleteRoute(this.route, environment.urlAddress));
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(this.createCompleteRoute(this.route, environment.urlAddress));
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.createCompleteRoute(this.route, environment.urlAddress), entity);
  }

  update(id: string, entity: T): Observable<T> {
    return this.http.put<T>(this.createCompleteRoute(this.route, environment.urlAddress), entity);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.createCompleteRoute(this.route, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
