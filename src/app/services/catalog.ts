import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface CarDetails {
    name: string;
    pricePerDay: number;
    photo: string;
}

@Injectable()
export class Catalog {
    private http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }

    all(): Observable<CarDetails[]> {
        return of([
            {
                name: 'Volvo xc 60',
                pricePerDay: 200,
                photo: 'assets/volvo.png',
            },
            {
                name: 'Range Rover',
                pricePerDay: 250,
                photo: 'assets/rover.png',
            }
        ]);
        return this.http.get<CarDetails[]>('/cars')
            .pipe(
                map(x => x),
                tap(x => console.log(x)),
                map(x => x)
            );
    }

    detailsOf(slug: any): Observable<CarDetails> {
        return of({
            name: 'Volvo xc 60',
            pricePerDay: 200,
            photo: 'assets/volvo.png',
        });
    }
}
