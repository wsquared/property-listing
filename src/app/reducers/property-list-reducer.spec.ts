import {describe, expect, it} from 'angular2/testing';
import * as propertyListActions from '../actions/property-list-action';
import propertyListReducer from './property-list-reducer';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

describe('Property-list-reducer', () => {

  it('should return a new property list', () => {
    let expectedPropertyList = List<PropertyModel>(new PropertyModel({ id: 23 }));
    let actualPropertyList = propertyListReducer(
      List<PropertyModel>(),
      propertyListActions.load(expectedPropertyList)
    );
    expect(actualPropertyList).toBe(expectedPropertyList);
  });

});
