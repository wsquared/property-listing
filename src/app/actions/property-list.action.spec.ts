import {describe, expect, it} from 'angular2/testing';
import * as propertyListActions from './property-list-action';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

describe('Property-list-actions', () => {

  it('should load a list of properties', () => {
    let expectedPropertyList = List<PropertyModel>(new PropertyModel({ id: 1 }));
    let actualPropertyList = propertyListActions.load(expectedPropertyList);
    expect(actualPropertyList.propertyList).toBe(expectedPropertyList);
  });

});
