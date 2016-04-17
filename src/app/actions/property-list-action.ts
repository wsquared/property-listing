import {List} from 'immutable';
import {PropertyModel} from '../models/propertyModel';

export const LOAD_PROPERTIES: string = 'LOAD_PROPERTIES';

export interface IPropertyAction {
  type: string;
  propertyList: List<PropertyModel>;
}

export function load(propertyList: List<PropertyModel>): IPropertyAction {
  return {
    type: LOAD_PROPERTIES,
    propertyList: propertyList
  };
}

