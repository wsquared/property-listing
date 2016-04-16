import {List} from 'immutable';
import {PropertyModel} from '../property/propertyModel';

import {
LOAD_PROPERTIES,
IPropertyAction
} from '../actions/property-action';

export default function(state: List<PropertyModel>, action: IPropertyAction) {

  function indexOf(id: number): number {
    return state.findIndex((i: PropertyModel) => i.id === id);
  }

  switch (action.type) {
    case LOAD_PROPERTIES:
      state = List<PropertyModel>(action.propertyList);
      return state;
    default:
      return state;
  }
}
