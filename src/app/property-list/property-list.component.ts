import {Component} from 'angular2/core';
import {PropertyService} from '../property-service/property-service';
import {PropertyModel} from '../property/propertyModel';
import {List} from 'immutable';
import * as PropertyActions from '../actions/property-action';


@Component({
  selector: 'property-list',
  templateUrl: './app/property-list/property-list.html',
  styleUrls: ['./app/property-list/property-list.css'],
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
        // TODO: Load into property-list store


        this.savedProperties = List<PropertyModel>(properties.saved);
        // TODO: Load into the saved-property-list store
      }
      );
  }
}
