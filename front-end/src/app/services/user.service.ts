import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../_core/HttpResult";
import {environment} from "../../environments/environment";
import {IUser} from "../compoents/user/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HttpResult> {
    return this.http.get<HttpResult>(environment.url_backend + 'users');
  }

  destroy(id: number): Observable<HttpResult> {
    return this.http.delete<HttpResult>(environment.url_backend + 'users/' + id + '/destroy');
  }

  create(data: IUser): Observable<HttpResult> {
    return this.http.post<HttpResult>(environment.url_backend + 'users/create', data);
  }
}
