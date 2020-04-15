import { environment } from './../../environments/environment.prod';
import { Repo } from './../repo-class/repo';
import { User } from './../user-class/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private client_id = 'af93ef785cfb010769d2';
  private client_secret = 'ceaf90465ea45b00e4a578e9a5fed40f21f37110';
  getUser:User;
  getRepos:Repo;
    constructor( private http:HttpClient) {
      this.getUser=new User('','',0,0,0,0,'',new Date,new Date)
       this.getRepos=new Repo('','','',0,0,'',new Date)
    }
  searchUser(searchName:string){
    interface Response{
      login: string;
      html_url:string;
      public_gists:number;
       public_repos:number;
       followers:number;
       following:number;
       avatar_url:string;
        created_at:Date;
        updated_at:Date;
    }
  
    return new Promise((resolve,reject)=>{
      this.http.get<Response>('https://api.github.com/users/'+searchName+'?client_id=' + this.client_id + "&client_secret=" + this.client_secret).toPromise().then( 
        (result)=>{
          this.getUser=result;
          console.log(this.getUser);
          resolve()
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    })
  }
  getReposi(searchName){
   interface Response{
    name:string;
    html_url:string;
    description:string;
    forks:number;
    watchers_count:number;
    language:string;
    created_at:Date;
   }
   return new Promise((resolve,reject)=>{
     this.http.get<Response>('https:api.github.com/users/'+searchName+  "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret+"order=created&sort=asc?").toPromise().then(
       (results)=>{
         this.getRepos=results;
         console.log(this.getRepos)
         resolve();
       },
       (error)=>{
         console.log(error);
         reject()
       }
     )
   })
  }
  } 
  