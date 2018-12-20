import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface CarDetails {
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
        return this.http.get<CarDetails[]>('/cars')
            .pipe(
                map(x => x),
                tap(x => console.log(x)),
                map(x => x)
            );
    }
}
