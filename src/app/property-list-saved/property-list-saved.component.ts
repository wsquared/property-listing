import {Component, Input, Inject, OnDestroy} from 'angular2/core';
import {Property} from '../property/property.component';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';
import * as PropertyListActions from '../actions/property-list-action';

import {bindActionCreators} from 'redux';

@Component({
  selector: 'property-list-saved',
  templateUrl: './app/property-list-saved/property-list-saved.html',
  styleUrls: ['./app/property-list-saved/property-list-saved.css'],
  directives: [Property]
})
export class SavedPropertyList implements OnDestroy {

  @Input() savedPropertyList: List<PropertyModel>;

  private unsubscribe: Function;
  private propertyListActions: typeof PropertyListActions;

  constructor( @Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      savedPropertyList: state.propertyList.saved
    };
  }

  mapDispatchToThis(dispatch) {
    return {
      propertyListActions: bindActionCreators(PropertyListActions, dispatch)
    };
  }

  removeProperty(property: PropertyModel) {
    this.propertyListActions.remove(property);
  }
}
