import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class PropertyService {

  constructor(private http: Http) {
  }

  getProperties(): any {
    return this.http
      .get('app/property-service/property.json')
      .map(res => res.json())
      ;
  }

}
