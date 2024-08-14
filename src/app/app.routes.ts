import { Routes } from '@angular/router';
import path from 'path';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
 
export const routes: Routes = [
    {path:"",redirectTo:"userlist", pathMatch:'full'},
 {path:"userlist",component:UsersComponent , title:"User Page"},
 {path:"**",component:NotFoundComponent,title:'not found'}
 
];
