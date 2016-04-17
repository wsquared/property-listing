import {Component, Input} from 'angular2/core';
import {Property} from '../property/property.component';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';
import * as PropertyActions from '../actions/property-list-action';


@Component({
  selector: 'property-list',
  templateUrl: './app/property-list/property-list.html',
  styleUrls: ['./app/property-list/property-list.css'],
  directives: [Property]
})
export class PropertyList {

  @Input() propertyList: List<PropertyModel>;
  constructor() {
  }

  addProperty(event): void {
    console.log(event);
  }

}
