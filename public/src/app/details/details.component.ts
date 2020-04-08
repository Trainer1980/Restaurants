import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  restaurantToShow: any;
  rest_id: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.rest_id = params['id']
    });
    this.getOneFromService();
  }
  getOneFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getOneById(this.rest_id).subscribe(data =>{
        this.restaurantToShow = data;
        console.log(data);
      });
    });
  }
}
