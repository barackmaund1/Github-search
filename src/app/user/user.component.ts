import{ Service } from '../service.service'
import { Repo } from './../repo-class/repo';
import { User } from './../user-class/user';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../http-request/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  repo:Repo;
  
    constructor(public userService:Service,public repoService:ServiceService) { }
  search(searchName){
    this.userService.searchUser(searchName).then(
      (success)=>{
        this.user=this.userService.getUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getReposi(searchName).then(
      ()=>{
        this.repo=this.repoService.getRepos;
        console.log(this.repo);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
    ngOnInit(): void {
      this.search('barackmaund1')
    }
  
  }