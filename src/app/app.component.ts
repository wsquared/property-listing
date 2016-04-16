/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {PropertyList} from './property-list';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [RouterActive],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    body {
      margin: 0;
    }
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <md-toolbar color="primary">
        <nav>
          <ul>
            |
            <li router-active>
              <a [routerLink]=" ['Home'] ">Home</a>
            </li>
            |
            <li router-active>
            <a [routerLink]=" ['Properties'] ">Properties</a>
            </li>
          </ul>
        </nav>
      </md-toolbar>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
    
    <footer>
      <p>Property Listings by Willwin Wang</p>
    </footer>
  `
})
@RouteConfig([
  { path: '/home', name: 'Home', component: Home },
  { path: '/properties', name: 'Properties', component: PropertyList },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {

  constructor() { }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
