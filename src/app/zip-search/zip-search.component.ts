import { Component, OnInit } from '@angular/core';
import {Http, Request, Response} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-zip-search',
  templateUrl: 'zip-search.component.html',
  styleUrls: ['zip-search.component.css']
})
export class ZipSearchComponent implements OnInit {

  result;
  zipCode: string;

  ngOnInit() {
  }

  constructor(private http: Http) {
  }
  search(): void {
    this.http.request(new Request({
      method: "Get",
//      url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060"
      url: `http://api.openweathermap.org/data/2.5/weather?appid=790e3323f2af85ff67cb2cd2a56acfcd&q=Kagoshima`
    })).subscribe((res: Response) => {
      this.result = res.json();
    });
  }



}
