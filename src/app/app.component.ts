/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {PropertyContainer} from './property-container/property-container.component';
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
      font-family: Museo-Sans-500,helvetica,arial,sans-serif;
    }
    md-toolbar li a {
      text-decoration: none;
      color: #484848;
      padding-right: 10px;
    }
    md-toolbar a.router-link-active {
      color: #e4002b;
    }
    footer {
      padding: 10px;
      color: #484848;
      font-family: Museo-Sans-500,helvetica,arial,sans-serif;
    }
  `],
  template: `
    <header>
      <md-toolbar>
        <nav>
          <ul>
            <li router-active>
              <a [routerLink]=" ['Home'] ">Home</a>
            </li>
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
  { path: '/properties', name: 'Properties', component: PropertyContainer },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {

  constructor() { }

}
