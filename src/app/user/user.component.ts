/**
 * Created by HieuNT48 on 8/17/17.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-user-form',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  route: any;

  model: any = {};
  userData: any;
    constructor(private router: Router, private userService: UserService, route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.userData = this.route.snapshot.data[0]['userData'];
        if ( this.userData) {
          this.model.username = this.userData.userId;
          this.model.password = this.userData.passWord;
        }
    }

    ngOnDestroy(): void {
    }

    createNewUser() {
        const username = this.model.username;
        const password = this.model.password;
        let response;
        console.log('createNewUser: ', username, ' password: ', password);
        if(this.userData){
          this.userService.edit(username, password).subscribe(result => {response = result; this.router.navigate(['/users']);});
        }else{
          this.userService.add(username, password).subscribe(result => {response = result; this.router.navigate(['/users']);});
        }



    }


}
