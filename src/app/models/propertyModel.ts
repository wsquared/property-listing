import {Record} from 'immutable';

const PropertyRecord = Record({
  id: 0,
  mainImage: '',
  price: '',
  agency: {
    brandingColors: {
      primary: ''
    },
    logo: ''
  },
  isSaved: false
});

export class PropertyModel extends PropertyRecord {

  id: string;
  mainImage: string;
  price: string;
  agency: {
    brandingColors: {
      primary: string;
    }
    logo: string;
  };
  isSaved: boolean;

  constructor(props) {
    super(props);
  }
}
