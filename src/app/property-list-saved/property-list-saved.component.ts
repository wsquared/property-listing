import {Component, Input} from 'angular2/core';
import {Property} from '../property/property.component';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

@Component({
  selector: 'property-list-saved',
  templateUrl: './app/property-list-saved/property-list-saved.html',
  styleUrls: ['./app/property-list-saved/property-list-saved.css'],
  directives: [Property]
})
export class SavedPropertyList {

  @Input() savedPropertyList: List<PropertyModel>;

  constructor() {
  }

  removeProperty(event) {
    console.log(event);
  }
}
