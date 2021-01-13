import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUser} from "../IUser";
import {HttpResult} from "../../../_core/HttpResult";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];
  message: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getAll().subscribe((res: HttpResult) => {
      if (res.status == 'success') {
        console.log(123)
        this.users = res.data
      } else {
        console.log('error')

      }
    })
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.userService.destroy(id).subscribe((res: HttpResult) => {
        if (res.status == 'success') {
          this.getAllUser();
          this.message = res.message;
        }
      })
    }

  }
}
