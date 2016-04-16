describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have <header>', () => {
    let subject = element(by.css('app header')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <main>', () => {
    let subject = element(by.css('app main')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <footer>', () => {
    let subject = element(by.css('app footer')).getText();
    let result  = 'Property Listings by Willwin Wang';
    expect(subject).toEqual(result);
  });

});
