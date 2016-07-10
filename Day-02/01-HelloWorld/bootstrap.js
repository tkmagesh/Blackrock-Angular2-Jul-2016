import { bootstrap } from '@angular/platform-browser-dynamic';
import { helloWorld } from './hello-world/hello-world.component';

bootstrap(helloWorld).catch(err => console.log(err)); // useful to catch 