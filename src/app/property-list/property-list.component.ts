import {Component, Input, Inject, OnDestroy} from 'angular2/core';
import {Property} from '../property/property.component';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';
import * as PropertyListActions from '../actions/property-list-action';

import {bindActionCreators} from 'redux';

@Component({
  selector: 'property-list',
  templateUrl: './app/property-list/property-list.html',
  styleUrls: ['./app/property-list/property-list.css'],
  directives: [Property]
})
export class PropertyList implements OnDestroy {

  @Input() propertyList: List<PropertyModel>;

  private unsubscribe: Function;
  private savedPropertyList: List<PropertyModel>;
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

  addProperty(property: PropertyModel): void {
    this.propertyListActions.add(property);
  }

}
