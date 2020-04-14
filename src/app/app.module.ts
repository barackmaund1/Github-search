import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { UsersearchFormComponent } from './usersearch-form/usersearch-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    UserComponent,
    UsersearchFormComponent,
    NotFoundComponent,
    NavbarComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
