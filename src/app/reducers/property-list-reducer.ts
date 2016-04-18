import {List} from 'immutable';
import {PropertyModel} from '../models/propertyModel';
import {PropertyListModel} from '../models/propertyListModel';
import {
  LOAD_PROPERTIES,
  LOAD_SAVED_PROPERTIES,
  ADD_PROPERTY,
  REMOVE_PROPERTY,
  IPropertyAction} from '../actions/property-list-action';

export default function (
  state: PropertyListModel = { results: List<PropertyModel>(), saved: List<PropertyModel>() },
  action: IPropertyAction) {

  switch (action.type) {
    case LOAD_PROPERTIES:
      state.results = List<PropertyModel>(action.propertyList);
      return state;
    case LOAD_SAVED_PROPERTIES:
      state.saved = List<PropertyModel>(action.propertyList);
      return state;
    case ADD_PROPERTY:
      let found = state.saved.find(p => p.id === action.property.id);
      if (found) {
        return state;
      }
      let savedProperty = new PropertyModel({
        id: action.property.id,
        mainImage: action.property.mainImage,
        price: action.property.price,
        agency: action.property.agency,
        isSaved: true
      });
      state.saved = state.saved.push(savedProperty);
      return state;
    case REMOVE_PROPERTY:
      let propertyToDeleteIndex = state.saved.indexOf(action.property);
      state.saved = state.saved.delete(propertyToDeleteIndex);
      return state;
    default:
      return { results: List<PropertyModel>(), saved: List<PropertyModel>() };
  }

}
