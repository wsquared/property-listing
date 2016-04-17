import {describe, expect, it, inject, beforeEachProviders} from 'angular2/testing';
import {Property} from './property.component';
import {PropertyModel} from '../models/propertyModel';

describe('Property', () => {

  beforeEachProviders(() => [Property]);

  it('emit removeProperty event when calling remove()', inject([Property],
    (property: Property) => {
      spyOn(property.removeProperty, 'emit').and.callThrough();
      property.remove(new Event('click'), new PropertyModel({ id: 1 }));
      expect(property.removeProperty.emit).toHaveBeenCalled();
    }));

  it('emit addProperty event when calling add()', inject([Property],
    (property: Property) => {
      spyOn(property.addProperty, 'emit').and.callThrough();
      property.add(new Event('click'), new PropertyModel({ id: 1 }));
      expect(property.addProperty.emit).toHaveBeenCalled();
    }));
});
