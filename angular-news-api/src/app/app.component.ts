import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'angular-api';

  private articles = [];
  private adresa = "https://newsapi.org/v2/everything?q=apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=e2fea88204ac46cf8072f29379921c64";
  hledat: string;

  clickedButton() {
    this.hledat = "";
    this.adresa = "https://newsapi.org/v2/everything?q=" + this.hledat + "apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=e2fea88204ac46cf8072f29379921c64";
    console.log(this.adresa);
    this.articles = [];
    this.httpClient
    .get(this.adresa)
    .subscribe(
      (data: any) => {
        this.articles = data["articles"];
        console.log(this.articles);
        }, (error) => {

      }
    );
  }


  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(this.adresa)
      .subscribe(
        (data) => {
          this.articles = data["articles"];
          console.log("https://newsapi.org/v2/everything?q=apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=e2fea88204ac46cf8072f29379921c64");
        }, //succes

        (error) => {
          console.log("error");
        } //error
      
      )     
  }
}
