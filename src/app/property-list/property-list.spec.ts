import {describe, expect, it, inject, beforeEachProviders} from 'angular2/testing';
import {PropertyList} from './property-list.component';
import {PropertyModel} from '../models/propertyModel';
import PropertyEvent from '../property/property-event';

describe('PropertyList', () => {

  beforeEachProviders(() => [PropertyList]);

  it('addProperty() should dispatch add action', inject([PropertyList],
    (propertyList: PropertyList) => {
      // propertyList.addProperty({id: '1'});
    }));

});
