import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user.component';
import {LoginComponent} from './account/login.component';
import {HomeComponent} from './home/home.component';


const routing: Routes = [
    { path: 'user', component: UserListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent}
]
export const appRoutes = RouterModule.forRoot(routing);