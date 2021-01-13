import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./layouts/core/main/main.component";
import {UserModule} from "./modules/user/user.module";


const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    children: [
      {
        path: 'users',
        loadChildren:(() => import('./modules/user/user.module').then(m => m.UserModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
