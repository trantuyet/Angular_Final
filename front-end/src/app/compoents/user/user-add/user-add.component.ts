import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValueConverter} from "@angular/compiler/src/render3/view/template";
import {UserService} from "../../../services/user.service";
import {HttpResult} from "../../../_core/HttpResult";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAddUser: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    })
  }

  submit() {
    let data = this.formAddUser.value;
    this.userService.create(data).subscribe((res:HttpResult) => {
      if (res.status == 'success') {
        this.router.navigate(['admin/users'])
      }
    })
  }

}
