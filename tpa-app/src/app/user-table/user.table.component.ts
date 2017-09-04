/**
 * Created by HieuNT48 on 8/17/17.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-table-form',
    templateUrl: 'user.table.component.html',
    styleUrls: ['user.table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy {

    model: any = {};
    users: User[];
    user : User;


    constructor(private router: Router, private userservice: UserService) {
    }

    ngOnInit(): void {
        this.userservice.getUsers().subscribe(users => this.users = users,
            err => {
                console.log(err);
            });
    }

    ngOnDestroy(): void {
    }

  delete(user: User): void {
    this.userservice
      .deleteUser(user.username);

    this.router.navigate(['/users']);

  }



}
