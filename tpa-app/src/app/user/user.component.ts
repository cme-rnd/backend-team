/**
 * Created by HieuNT48 on 8/17/17.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  model: any = {};

  constructor(private router: Router, private userservice: UserService){
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  createNewUser(user : User ) {
    this.userservice.addUser(user);
    this.router.navigate(['/users']);
  }

  updateUser(user : User)  {
    this.userservice.update(user);

  }
}
