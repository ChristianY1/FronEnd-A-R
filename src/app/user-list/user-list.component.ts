import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {DataService} from '../data.service';
import { Observable, timer } from 'rxjs';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  User: any = [];


  constructor(public dataService: DataService) { }

  ngOnInit(){
    this.getUsers();
    
  }

  getUsers(){
     return this.dataService.getUsers().subscribe((data: {}) => {
       this.User = data;
     })
  }

}
