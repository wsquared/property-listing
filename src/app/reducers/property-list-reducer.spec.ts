import {describe, expect, it} from 'angular2/testing';
import * as propertyListActions from '../actions/property-list-action';
import propertyListReducer from './property-list-reducer';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

describe('Property-list-reducer', () => {

  it('should return a new property list', () => {
    let expectedPropertyList = List<PropertyModel>(new PropertyModel({ id: 23 }));
    let actualPropertyList = propertyListReducer(
      { results: List<PropertyModel>(), saved: List<PropertyModel>() },
      propertyListActions.load(expectedPropertyList)
    );
    expect(actualPropertyList.results).toBe(expectedPropertyList);
  });

  it('should return a new saved property list', () => {
    let expectedPropertyList = List<PropertyModel>(new PropertyModel({ id: 23 }));
    let actualPropertyList = propertyListReducer(
      { results: List<PropertyModel>(), saved: List<PropertyModel>() },
      propertyListActions.loadSaved(expectedPropertyList)
    );
    expect(actualPropertyList.saved).toBe(expectedPropertyList);
  });

  it('should add a property to the saved property list', () => {
    let expectedProperty = new PropertyModel({ id: 23, isSaved: true });
    let actualPropertyList = propertyListReducer(
      { results: List<PropertyModel>(), saved: List<PropertyModel>() },
      propertyListActions.add(new PropertyModel({ id: 23 }))
    );
    expect(actualPropertyList.saved).toContain(expectedProperty);
  });

  it('should remove a property in the saved property list', () => {
    let propertyToDelete = new PropertyModel({ id: 23 });
    let actualPropertyList = propertyListReducer(
      { results: List<PropertyModel>(), saved: List<PropertyModel>(propertyToDelete) },
      propertyListActions.remove(propertyToDelete)
    );
    expect(actualPropertyList.saved.find(p => p.id === propertyToDelete.id)).toBe(undefined);
  });
});
