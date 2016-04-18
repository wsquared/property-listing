import {describe, expect, it} from 'angular2/testing';
import * as propertyListActions from './property-list-action';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

describe('Property-list-actions', () => {

  it('should setup a list of properties', () => {
    let expectedPropertyList = List<PropertyModel>(new PropertyModel({ id: 1 }));
    let actualPropertyList = propertyListActions.load(expectedPropertyList);
    expect(actualPropertyList.propertyList).toBe(expectedPropertyList);
  });

  it('should setup a list of saved properties', () => {
    let expectedPropertyList = List<PropertyModel>(new PropertyModel({ id: 1 }));
    let actualPropertyList = propertyListActions.loadSaved(expectedPropertyList);
    expect(actualPropertyList.propertyList).toBe(expectedPropertyList);
  });

  it('should setup a property to add', () => {
    let expectedProperty = new PropertyModel({ id: 1 });
    let actualProperty = propertyListActions.add(expectedProperty);
    expect(actualProperty.property).toBe(expectedProperty);
  });

  it('should setup a property to remove', () => {
    let expectedProperty = new PropertyModel({ id: 1 });
    let actualProperty = propertyListActions.remove(expectedProperty);
    expect(actualProperty.property).toBe(expectedProperty);
  });
});
