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
import {Headers} from '@angular/http';

@Injectable()
export class UserService {

  users: User[];

  private userUrl = 'http://localhost:8081/training/api/v1/users';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router) {
  }


  getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteUser(username: string): Promise<void> {
    const url = `${this.userUrl}/${username}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  addUser(user : User) : Promise<void> {

    let obj = {username : user.username, password : user.password};
    return this.http.post(this.userUrl, JSON.stringify(obj), {headers:this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  update(user : User) : Promise<User> {
    const url = `${this.userUrl}/${user.username}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  /*deleteUser(username : string) : Observable<void> {
    const url = `${this.userUrl}/${username}`;
        return this.http.delete(url).map((res : Response) => res.json());
  }*/

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
