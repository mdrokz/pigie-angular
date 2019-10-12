import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(private http: HttpserviceService) { }

  addUser() {
    debugger;
    this.http.addUser(this.user).subscribe(res => {
      debugger;
      console.log(res);
    });
  }

  ngOnInit() {

  }

}
