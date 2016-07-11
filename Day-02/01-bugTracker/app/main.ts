import { bootstrap }    from '@angular/platform-browser-dynamic';

//import { AppComponent } from './app.component';

import {BugTracker} from './bugTracker/bugTracker.component';
import {BugOperations} from './services/BugOperations';


bootstrap(BugTracker, [BugOperations]);
