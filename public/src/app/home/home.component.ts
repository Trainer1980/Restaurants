import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurants: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllFromService();
  }
  getAllFromService(){
    this._httpService.getAll().subscribe(data => {
      console.log(`Got our restaurants!`, data);
      this.restaurants = data;
    });
  }
  onClickDelete(id) {
    this._httpService.deleteOne(id).subscribe(data => {
      console.log(`delete event is working with param: ${id}`, data)
      this.getAllFromService();
    })
  }
}
