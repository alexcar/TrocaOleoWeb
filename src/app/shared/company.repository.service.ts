import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';
import { Company } from '../model/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyRepositoryService {

  constructor(private http: HttpClient) { }

  getData(route: string): Observable<Company[]> {
    return this.sendRequest<Company[]>("GET",
      this.createCompleteRoute(route, environment.urlAddress));
  }

  create(route: string, company: Company): Observable<Company> {
    return this.sendRequest<Company>("POST",
      this.createCompleteRoute(route, environment.urlAddress), company);
  }

  update(route: string, company: Company): Observable<Company> {
    return this.sendRequest<Company>("PUT",
      this.createCompleteRoute(route, environment.urlAddress), company);
  }

  delete(route: string, id: string): Observable<Company> {
    return this.sendRequest<Company>("DELETE",
      this.createCompleteRoute(route, environment.urlAddress));
  }

  private sendRequest<T>(verb: string, url: string, body?: Company) : Observable<T> {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set("Access-Key", "<secret>");
    myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);

    return this.http.request<T>(verb, url, {
      body: body,
      headers: myHeaders
    }).pipe(catchError((error: Response) => {
      throw(`Network Error: ${error.statusText} (${error.status})`)
    }));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
