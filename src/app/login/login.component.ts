import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private http: HttpserviceService, private router: Router) { }

  checkUser() {
    this.http.checkUser(this.user).subscribe((res: any) => {
      if (res.message == "User Found") {
          this.router.navigateByUrl('/about');
      }
      else{
          console.log("try again");
      }
      console.log(res);
    });
  }
  ngOnInit() {
  }

}
