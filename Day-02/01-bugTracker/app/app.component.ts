import { Component } from '@angular/core';
import {Greeter} from './greeter/greeter.component'

@Component({
    selector: 'my-app',
    template: `<div>
    	<h1>My First Angular 2 App</h1>
    	<greeter></greeter>
    	</div>
    	`,
    directives : [Greeter]
})
export class AppComponent { }


