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
  }

  clickedButton() {
    this.userService.deleteUser().subscribe(
      (data: any) => {
        AccessToken.token = '';
        this.router.navigate(['/home']);
      }, (error) => {
      }
    );
  }
}
