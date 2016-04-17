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

  id: number;
  mainImage: string;
  price: string;
  agency: {
    brandingColors: {
      primary: number;
    }
    logo: string;
  };
  isSaved: boolean;

  constructor(props) {
    super(props);
  }
}
