import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  restaurantToEdit: any;
  updatedRestaurant: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    this.restaurantToEdit = {name: "", cuisine: ""};
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
    this._router.navigate(['/restaurants']);
  }
  onSubmitEdit(){
    console.log(`edit event`)
      this._route.params.subscribe((params)=>{
        this._httpService.editOne(params['id'], this.restaurantToEdit).subscribe(data =>{
        console.log(`edit event post data: ${params['id']}`, data)
        this.updatedRestaurant = data
        this.goHome();
      })
    })
  }
}
