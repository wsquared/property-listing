import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from 'angular2/core';
import {PropertyModel} from '../models/propertyModel';
import PropertyEvent from './property-event';

@Component({
  selector: 'property',
  templateUrl: './app/property/property.html',
  styleUrls: ['./app/property/property.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Property {

  @Input() property: PropertyModel;
  @Output() addProperty: EventEmitter<PropertyEvent> = new EventEmitter<PropertyEvent>();
  @Output() removeProperty: EventEmitter<PropertyEvent> = new EventEmitter<PropertyEvent>();
  constructor() { }

  add(event, property: PropertyModel): void {
    event.preventDefault();
    event.stopPropagation();
    this.addProperty.emit(property);
  }

  remove(event, property: PropertyModel): void {
    event.preventDefault();
    event.stopPropagation();
    this.removeProperty.emit(property);
  }
}
