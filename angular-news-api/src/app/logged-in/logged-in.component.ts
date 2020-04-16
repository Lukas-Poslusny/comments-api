import {Component, OnInit} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import AccessToken from '../AccessToken';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      console.log(localStorage.getItem('access_token'));
      this.userService.accessToken = (localStorage.getItem('access_token'));
    } else {
      this.router.navigate(['/home']);
    }
  }

  clickedButton() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
