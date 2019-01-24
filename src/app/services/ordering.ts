import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface CurrentOffer {
    finnalPrice: number;
}

export interface PlaceReservation {
    seenOffer: number;
    carId: string;
    rentalDate: Date;
    releaseDate: Date;
    email: string;
    name: string;
}

export interface ReservationConfirmation {
    paymentUrl: string;
}

@Injectable()
export class Ordering {
    private http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }

    currentOffer(): Observable<CurrentOffer> {
        return this.http.get<CurrentOffer>('/ordering/current-offer')
            .pipe(
                map(x => x),
                tap(x => console.log(x)),
                map(x => x)
            );
    }

    placeOrder(reservation: PlaceReservation): Observable<ReservationConfirmation> {
        return of({paymentUrl: 'przelewy24/payment/x'});
    }
}
