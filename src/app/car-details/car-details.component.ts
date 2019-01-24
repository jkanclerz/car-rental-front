import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable, of, Subject } from 'rxjs';
import { CarDetails, Catalog } from '../services/catalog';
import { tap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  public car: CarDetails;

  constructor(private route: ActivatedRoute, private catalog: Catalog, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catalog.detailsOf(params.slug)
        .pipe(
          tap(car => console.log(car)),
          retry(3)
        ).subscribe(car => this.car = car);
    });
  }

  handleClick(name: string) {
    this.router.navigate(['order', name]);
  }
}
