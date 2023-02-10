import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { CartsComponent } from './components/carts/carts.component';
import { UsersGridComponent } from './pages/users-grid/users-grid.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch:"full",
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'users', component: UsersComponent,
  },
  {
    path: 'carts', component: CartsComponent,
  },
  {
    path: 'users-grid', component: UsersGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
