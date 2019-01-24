import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CommonModule } from '@angular/common';
import { CarOrderingComponent } from './car-ordering/car-ordering.component';

const routes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', component: CarListComponent },
    { path: 'cars/:slug', component: CarDetailsComponent },
    { path: 'order/:slug', component: CarOrderingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
