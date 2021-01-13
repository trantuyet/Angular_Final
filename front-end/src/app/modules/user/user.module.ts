import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "../../compoents/user/user-list/user-list.component";
import {RouterModule, Routes} from "@angular/router";
import {UserAddComponent} from "../../compoents/user/user-add/user-add.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
];


@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule {
}
