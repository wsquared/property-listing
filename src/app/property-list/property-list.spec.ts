import {describe, expect, it, inject, beforeEachProviders} from 'angular2/testing';
import {PropertyList} from './property-list.component';
import {PropertyModel} from '../models/propertyModel';
const provider = require('ng2-redux').provider;
import configureStore from '../stores/configureStore';

describe('PropertyList', () => {

  beforeEachProviders(() => [PropertyList, provider(configureStore())]);

  it('addProperty() should dispatch add action', inject([PropertyList],
    (propertyList: PropertyList) => {
      spyOn(propertyList.propertyListActions, 'add');
      propertyList.addProperty(new PropertyModel({id: '1'}));
      expect(propertyList.propertyListActions.add).toHaveBeenCalled();
    }));

});
