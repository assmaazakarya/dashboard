import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Componenets/dashboard/dashboard.component';
import { using } from 'rxjs';
import { UsersComponent } from './Componenets/users/users.component';
import { MealsComponent } from './Componenets/meals/meals.component';
import { OrdersComponent } from './Componenets/orders/orders.component';
//Routes is a built in Interface
export const routes: Routes = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
{path:'dashboard', component:DashboardComponent},
{path:'users', component:UsersComponent},
{path:'meals', component:MealsComponent},
{path:'orders', component:OrdersComponent},


];
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}





