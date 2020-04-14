import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usersearch-form',
  templateUrl: './usersearch-form.component.html',
  styleUrls: ['./usersearch-form.component.css']
})
export class UsersearchFormComponent implements OnInit {

  searchName:string;
  @Output() searchOutput = new EventEmitter<any>()
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
