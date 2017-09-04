/**
 * Created by HieuNT48 on 8/17/17.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import {UserComponent} from '../user/user.component';

@Component({
    selector: 'app-user-table-form',
    templateUrl: 'user.table.component.html',
    styleUrls: ['user.table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy {

    model: any = {};
    users: User[];


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

    remove(userId): void {
      this.userservice.remove(userId).subscribe(result => {
        console.log(result);
        if (result) {
          this.router.navigate(['/users']);
        }
      });
    }

    edit(user): void {
      this.userservice.user = user;
      this.router.navigate(['/user']);
    }
}
