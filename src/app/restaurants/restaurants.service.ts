import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs";
import { Injectable } from "@angular/core";

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {}
  
  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(response => ErrorHandler.handleError(response));
  }

}