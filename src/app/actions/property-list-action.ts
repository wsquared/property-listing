import {List} from 'immutable';
import {PropertyModel} from '../models/propertyModel';

export const LOAD_PROPERTIES: string = 'LOAD_PROPERTIES';
export const ADD_PROPERTY: string = 'ADD_PROPERTY';
export const LOAD_SAVED_PROPERTIES: string = 'LOAD_SAVED_PROPERTIES';
export const REMOVE_PROPERTY: string = 'REMOVE_PROPERTY';

export interface IPropertyAction {
  type: string;
  propertyList?: List<PropertyModel>;
  property?: PropertyModel;
}

export function load(propertyList: List<PropertyModel>): IPropertyAction {
  return {
    type: LOAD_PROPERTIES,
    propertyList: propertyList
  };
}

export function loadSaved(savedPropertyList: List<PropertyModel>): IPropertyAction {
  return {
    type: LOAD_SAVED_PROPERTIES,
    propertyList: savedPropertyList
  };
}

export function add(property: PropertyModel): IPropertyAction {
  return {
    type: ADD_PROPERTY,
    property: property
  };
}

export function remove(property: PropertyModel) {
  return {
    type: REMOVE_PROPERTY,
    property: property
  };
}
