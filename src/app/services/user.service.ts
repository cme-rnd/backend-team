/**
 * Created by HieuNT48 on 8/18/17.
 */
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    users: User[];
    mainURL: 'http://localhost:8081/training/api/v1';
    constructor(private http: Http, private router: Router) {
    }


    getUsers(): Observable<User[]> {
        return this.http.get( 'http://localhost:8081/training/api/v1/users').map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    remove(userId): Observable<boolean> {
      const url = 'http://localhost:8081/training/api/v1/deleteUsers/' + userId;
      console.log(url);
        return this.http.delete(url)
          .map((res: Response) => res.json());
    }

  add(userId, passWord): Observable<boolean> {
    const url = 'http://localhost:8081/training/api/v1/users';
    const data = {'userId' : userId, 'passWord' : passWord};
    console.log(url);
    return this.http.put(url, data)
      .map((res: Response) => res.json());
  }

  edit(userId, passWord): Observable<boolean> {
    const url = 'http://localhost:8081/training/api/v1/update';
    const data = {'userId' : userId, 'passWord' : passWord};
    console.log(url);
    return this.http.post(url, data)
      .map((res: Response) => res.json());
  }

}
