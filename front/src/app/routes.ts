import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { CreationComponent } from './creation/creation.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Greeting details',
    },
    {
      path: 'creation',
      component: CreationComponent,
      title: 'Create greeting',
    },
  ];
  export default routeConfig;