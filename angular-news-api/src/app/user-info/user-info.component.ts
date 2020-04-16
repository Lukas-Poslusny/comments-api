import {Component, OnInit, ɵɵresolveBody} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {ReturnedData} from '../return-data';
import AccessToken from '../AccessToken';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public url = this.userService.url + 'users';
  public usersArray = [];
  public currentPage = 0;
  public pageCount;


  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient) {
  }

  changePageButton(pageNumber) {
    this.currentPage = pageNumber;
    this.loadPage();
  }

  increasePageButton(pageNumber) {
    this.currentPage += pageNumber;
    this.loadPage();
  }

  getPageAmount() {
    const header = new HttpHeaders().set('User-Token', this.userService.accessToken);
    this.httpClient.get<ReturnedData>(this.url, {headers: header}).subscribe(
      (data) => {
        this.pageCount = data.page_count;
        console.log(this.pageCount);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadPage() {
    const header = new HttpHeaders().set('User-Token', this.userService.accessToken);
    const tempUsersArray = [];
    console.log(this.userService.accessToken);

    this.httpClient.get<ReturnedData>(this.url, {headers: header}).subscribe(
      (data) => {

        this.httpClient.get<ReturnedData>(this.url + '?page=' + this.currentPage, {headers: header})
          .subscribe(
            (data) => {
              this.usersArray = data.users.concat(tempUsersArray);
              console.log(this.usersArray);
            },
            error => {
              console.log(error);
            }
          );

      },
      error => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        console.log(error);
      }
    );
  }

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      console.log(localStorage.getItem('access_token'));
      this.userService.accessToken = (localStorage.getItem('access_token'));

      this.router.navigate(['/user-info']);
    } else {
      this.router.navigate(['/login']);
    }

    this.getPageAmount();
    this.loadPage();

  }

}
