import {Component, OnDestroy, Inject} from 'angular2/core';
import {PropertyService} from '../property-service/property-service';
import {PropertyList} from '../property-list/property-list.component';
import {SavedPropertyList} from '../property-list-saved/property-list-saved.component';
import {PropertyModel} from '../models/propertyModel';
import {List} from 'immutable';

import {bindActionCreators} from 'redux';
import * as PropertyListActions from '../actions/property-list-action';

@Component({
  selector: 'property-container',
  templateUrl: './app/property-container/property-container.html',
  styleUrls: ['./app/property-container/property-container.css'],
  providers: [PropertyService],
  directives: [PropertyList, SavedPropertyList]
})
export class PropertyContainer implements OnDestroy {

  private propertyList: List<PropertyModel>;
  private savedPropertyList: List<PropertyModel>;
  private unsubscribe: Function;
  private propertyListActions: typeof PropertyListActions;

  constructor(@Inject('ngRedux') ngRedux, private propertyService: PropertyService) {
    this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
  }

  ngOnInit() {
    this.loadProperties();
  }
  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      propertyList: state.propertyList
    };
  }

  mapDispatchToThis(dispatch) {
    return {
      propertyListActions: bindActionCreators(PropertyListActions, dispatch)
    };
  }

  loadProperties() {
    this.propertyService
      .getProperties()
      .subscribe(
      properties => {

        this.propertyListActions.load(List<PropertyModel>(properties.results));

        this.savedPropertyList = properties
          .saved
          .map(saved => new PropertyModel(
            {
              id: saved.id,
              mainImage: saved.mainImage,
              price: saved.price,
              agency: {
                brandingColors: {
                  primary: saved.agency.brandingColors.primary
                },
                logo: saved.agency.logo
              },
              isSaved: true
            }
          ));
        // TODO: Load into the saved-property-list store
      }
      );
  }

}
