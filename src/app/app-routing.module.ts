import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { LoginComponent } from './login/login.component';
import { BuscComponent } from './busc/busc.component';

const routes: Routes = [
  { path: "index", component: AppComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "habi", component: HabitacionComponent },
  { path: "busc", component: BuscComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
