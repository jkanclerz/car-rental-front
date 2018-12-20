import { Component, OnInit } from '@angular/core';
import { Catalog } from '../carcatalog/catalog';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  private catalog: Catalog;
  public cars = [];
  constructor(carCatalog: Catalog) {
    this.catalog = carCatalog;
  }

  handleClick(name: string) {
    alert('You are going to rent ' + name);
  }

  ngOnInit() {
    this.catalog.all()
      .subscribe(x => {
        this.cars = x;    
      });
  }
}
