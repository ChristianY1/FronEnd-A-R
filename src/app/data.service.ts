import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import { User } from './user/user';
import { Bill } from './models/models.bill';
@Injectable()
export class DataService {

  private userUrl = '/api/v1/users';
  private billUrl = '/api/v1/bills';
  //private apiURL = 'localhost:3000';
  public showMyMessage = false;
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

  getBills(): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.billUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public facturar(factura: Bill) {
    return this.http.post<Bill>(this.billUrl, factura);
  }

  deleteUser(id: number) {
    return this.http.delete<User>(this.userUrl+'/' + id);
  }


}
