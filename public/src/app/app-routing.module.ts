import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
  { path: 'restaurants', component: HomeComponent},
  { path: 'restaurants/new', component: NewComponent },
  { path: 'restaurants/:id', component: DetailsComponent },
  { path: 'restaurants/:id/edit', component: EditComponent },
  { path: 'restaurants/:id/review', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
