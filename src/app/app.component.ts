import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'FrontEnd2';

  constructor(private datasVC: DataService){}

  ngOInit(){
    this.datasVC.getUsers().subscribe(res =>{
      console.log('Res', res)
    })
  }
}
