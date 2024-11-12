import { Routes } from '@angular/router';
import { MammaMiaComponent } from './mamma-mia/mamma-mia.component';
import { CrearPizzaComponent } from './crearpizza/crearpizza.component';

export const routes: Routes = [
    {path: "", component: MammaMiaComponent},
    {path: "pizza", component: CrearPizzaComponent}
];
