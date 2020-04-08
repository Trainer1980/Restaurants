import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newRestaurant: any;
  createdRestaurant: any;
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.newRestaurant = {name: "", cuisine: ""}
    });
    
  }
  goHome() {
    this._router.navigate(['/restaurants']);
  }
  onSubmitCreate(){
    this._httpService.createOne(this.newRestaurant).subscribe(data => {
      console.log(`Got data from post back`, data);
      this.createdRestaurant = data
      this.goHome();
    })
  }
}
