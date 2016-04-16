import {Component} from 'angular2/core';
import {PropertyService} from '../property-service/property-service';
import {PropertyModel} from '../property/propertyModel';
import {List} from 'immutable';
import * as PropertyActions from '../actions/property-action';


@Component({
  templateUrl: 'app/property-list/property-list.html',
  providers: [PropertyService]
})
export class PropertyList {
  private properties: List<PropertyModel>;
  private savedProperties: List<PropertyModel>;

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService
      .getProperties()
      .subscribe(
      properties => {
        this.properties = List<PropertyModel>(properties.results);
        this.savedProperties = List<PropertyModel>(properties.saved);
      }
      );
  }
}
