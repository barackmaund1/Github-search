import { ServiceService } from './http-request/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { UsersearchFormComponent } from './usersearch-form/usersearch-form.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';
import{ Service } from './service.service'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    UserComponent,
    UsersearchFormComponent,
    
    NotFoundComponent,
    PipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [ServiceService,Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
