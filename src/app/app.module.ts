import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SidebarComponent } from "./Componenets/sidebar/sidebar.component";
import{RouterModule} from"@angular/router"
import{AppRoutingModule} from "./app.routing.module"
import { HttpClientModule } from "@angular/common/http";
import { BodyComponent } from "./Componenets/body/body.component";
import { DashboardComponent } from "./Componenets/dashboard/dashboard.component";
import { UsersComponent } from "./Componenets/users/users.component";
import { MealsComponent } from "./Componenets/meals/meals.component";
import { OrdersComponent } from "./Componenets/orders/orders.component";
import { dashboardTableComponent } from "./Componenets/table/table.component";
import { UsersTableComponent } from "./Componenets/usersTable/usersTable.component";
import { OrderTableComponent } from "./Componenets/orderTable/orderTable.component";
import { MealsTableComponent } from "./Componenets/mealsTable/mealsTable.component";

@NgModule({
    declarations:[
     AppComponent,
     SidebarComponent,
     BodyComponent,
     DashboardComponent,
     UsersComponent,
     MealsComponent ,
     OrdersComponent,
     dashboardTableComponent,
     UsersTableComponent,
     OrderTableComponent,
     MealsTableComponent
    ],
    imports:[
     BrowserModule,
     RouterModule,
     AppRoutingModule,
     HttpClientModule
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
    ]
})

export class AppModule{

}