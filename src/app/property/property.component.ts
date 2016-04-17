import {Component, ChangeDetectionStrategy, Input} from 'angular2/core';
import {PropertyModel} from '../models/propertyModel';

@Component({
  selector: 'property',
  templateUrl: './app/property/property.html',
  styleUrls: ['./app/property/property.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Property {

  @Input() property: PropertyModel;
  constructor() { }

}
