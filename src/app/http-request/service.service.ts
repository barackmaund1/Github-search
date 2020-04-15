import { environment } from './../../environments/environment.prod';
import { Repo } from './../repo-class/repo';
import { User } from './../user-class/user';
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getRepos:Repo;

  constructor( private http:HttpClient) {
  
     this.getRepos=new Repo('','','',0,0,'',new Date)
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
      this.http.get<Response>('https:api.github.com/users/'+searchName+ "/repos?order=created&sort=asc?access_token=" + environment.apiKey).toPromise().then(
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

  