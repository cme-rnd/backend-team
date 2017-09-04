/**
 * Created by HieuNT48 on 8/17/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserTableComponent } from './user-table/user.table.component';

const appRoutes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'users', component: UserTableComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
