import {PropertyModel} from './propertyModel';
import {List} from 'immutable';

export class PropertyListModel {
  public results: List<PropertyModel>;
  public saved: List<PropertyModel>;
}
