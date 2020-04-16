import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private username;
  private password;
  private checkpassword;
  private email;

  constructor(private router: Router, private userService: UserService) { }

  clickedButton() {
    if (this.checkpassword === this.password) {
      this.userService.registerUser(this.username, this.email, this.password, this.checkpassword)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/home']);
        }, (error) => {
        }
      );
    }
  }

  ngOnInit() {
  }

}
