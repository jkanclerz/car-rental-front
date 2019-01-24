import { Component, OnInit } from '@angular/core';
import { Catalog } from '../services/catalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public cars = [];
  constructor(private carCatalog: Catalog, private router: Router) {}

  handleClick(name: string) {
    this.router.navigate(['order', name]);
  }

  ngOnInit() {
    this.carCatalog.all()
      .subscribe(cars => {
        this.cars = cars;
      });
  }
}
