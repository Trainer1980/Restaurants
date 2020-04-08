import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  restaurantToEdit: any;
  newRating = {customer: "", rating: "", content: ""};
  rest_id: any;
  restaurantToShow: any;
  obj: any;

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
    this.newRating = {customer: "", rating: "", content: ""};
    this.getOneFromService();
  }
  getOneFromService(){
    this._route.params.subscribe((params) =>{
      this._httpService.getOneById(params['id']).subscribe(data =>{
        this.restaurantToEdit = data;
        console.log(data);
      });
    });
  }
  goHome() {
    this._router.navigate(['/restaurants/', this.rest_id]);
  }
  onSubmitReview(){
    this._route.params.subscribe((params) =>{
      this._httpService.addReview(params['id'], this.newRating).subscribe(data =>{
        this.restaurantToShow = data;
        console.log(data);
        this.goHome();
      })
    })
  }
}
