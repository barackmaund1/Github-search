import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from './user-class/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  // getUser:User;
  
  //   constructor( private http:HttpClient) {
  //     this.getUser=new User('','',0,0,0,0,'',new Date,new Date)
      
  //   }
  // searchUser(searchName:string){
  //   interface Response{
  //     login: string;
  //     html_url:string;
  //     public_gists:number;
  //      public_repos:number;
  //      followers:number;
  //      following:number;
  //      avatar_url:string;
  //       created_at:Date;
  //       updated_at:Date;
  //   }
  
  //   return new Promise((resolve,reject)=>{
  //     this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then( 
  //       (result)=>{
  //         this.getUser=result;
  //         console.log(this.getUser);
  //         resolve()
  //       },
  //       (error)=>{
  //         console.log(error);
  //         reject();
  //       }
  //     )
  //   })
  // }
  
  } 