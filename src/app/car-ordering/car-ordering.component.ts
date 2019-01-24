import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-ordering',
  templateUrl: './car-ordering.component.html',
  styleUrls: ['./car-ordering.component.scss']
})
export class CarOrderingComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.name = params.slug);
  }

}
