import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {
  BaseRequestOptions,
  Http,
  XHRBackend,
  ResponseOptions,
  Response,
  HTTP_PROVIDERS
} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {PropertyService} from './property-service';


describe('PropertyService Service', () => {

  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function (backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    PropertyService
  ]);

  it('should return a list of properties', inject([PropertyService], (service: PropertyService) => {
    service.getProperties().subscribe(
      res => {
        let properties = res.json().map(property => property);

        // TODO: check returns a list of properties
      }
    );
  }));

});
