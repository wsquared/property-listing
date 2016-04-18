import {describe, expect, it, inject, beforeEachProviders} from 'angular2/testing';
import {SavedPropertyList} from './property-list-saved.component';
import {PropertyModel} from '../models/propertyModel';
const provider = require('ng2-redux').provider;
import configureStore from '../stores/configureStore';

describe('SavedPropertyList', () => {

  beforeEachProviders(() => [SavedPropertyList, provider(configureStore())]);

  it('removeProperty() should dispatch remove action', inject([SavedPropertyList],
    (savedPropertyList: SavedPropertyList) => {
      spyOn(savedPropertyList.propertyListActions, 'remove');
      savedPropertyList.removeProperty(new PropertyModel({id: '1'}));
      expect(savedPropertyList.propertyListActions.remove).toHaveBeenCalled();
    }));

});
