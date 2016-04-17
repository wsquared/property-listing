import {List} from 'immutable';
import {PropertyModel} from '../models/propertyModel';
import {LOAD_PROPERTIES, IPropertyAction} from '../actions/property-list-action';

export default function (
  state: List<PropertyModel> = List<PropertyModel>(),
  action: IPropertyAction) {

  function indexOf(id: string): number {
    return state.findIndex((i: PropertyModel) => i.id === id);
  }

  switch (action.type) {
    case LOAD_PROPERTIES:
      state = List<PropertyModel>(action.propertyList);
      return state;
    default:
      return List<PropertyModel>();
  }
}
