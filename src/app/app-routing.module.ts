import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { CartsComponent } from './components/carts/carts.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
