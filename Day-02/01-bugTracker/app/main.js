"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import { AppComponent } from './app.component';
var bugTracker_component_1 = require('./bugTracker/bugTracker.component');
var BugOperations_1 = require('./services/BugOperations');
platform_browser_dynamic_1.bootstrap(bugTracker_component_1.BugTracker, [BugOperations_1.BugOperations]);
//# sourceMappingURL=main.js.map