interface PropertyEvent {
  id: string;
  mainImage: string;
  price: string;
  agency: {
    brandingColors: {
      primary: string;
    },
    logo: string;
  };
  isSaved: boolean;
}

export default PropertyEvent;
