import { bootstrap }    from '@angular/platform-browser-dynamic';

//import { AppComponent } from './app.component';

import {BugTracker} from './bugTracker/bugTracker.component';
import {Dummy} from './models/Dummy';

bootstrap(BugTracker, [Dummy]);
