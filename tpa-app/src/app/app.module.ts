import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { DataTableModule } from 'angular2-datatable';

import { UserComponent } from './user/user.component';
import { UserTableComponent } from './user-table/user.table.component';
import { UserService } from './services/user.service';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserTableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        DataTableModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
