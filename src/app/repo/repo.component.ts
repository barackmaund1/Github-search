import { User } from './../user-class/user';
import { Service} from '../service.service'
import { Repo } from './../repo-class/repo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:Repo;
  user:User;
    constructor( public userService:Service,  public repoService:Service) { }
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
        (results)=>{
          this.repo=this.repoService.getRepos
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
    