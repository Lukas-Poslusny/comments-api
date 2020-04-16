import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import AccessToken from '../AccessToken';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  private password;
  private email;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  clickedButton() {
    console.log(this.userService);
    this.userService.loginUser(this.email, this.password).subscribe(
      (data) => {
        this.userService.accessToken = data.body.access_token;
        this.router.navigate(['/logged-in']);
        console.log(this.userService.accessToken);
      }, (error) => {
      }
    );
  }

  ngAfterViewInit(): void {
    console.log(this.userService);
  }
}
