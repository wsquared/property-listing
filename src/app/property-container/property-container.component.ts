import {Component} from 'angular2/core';
import {PropertyService} from '../property-service/property-service';
import {PropertyList} from '../property-list/property-list.component';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

@Component({
  selector: 'property-container',
  templateUrl: './app/property-container/property-container.html',
  styleUrls: ['./app/property-container/property-container.css'],
  providers: [PropertyService],
  directives: [PropertyList]
})
export class PropertyContainer {

  private propertyList: List<PropertyModel>;
  private savedPropertyList: List<PropertyModel>;

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
        this.propertyList = List<PropertyModel>(properties.results);
        // TODO: Load into property-list store


        this.savedPropertyList = List<PropertyModel>(properties.saved);
        // TODO: Load into the saved-property-list store
      }
      );
  }

}
