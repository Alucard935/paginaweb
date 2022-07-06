import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HabitacionComponent } from './habitacion/habitacion.component';

const routes: Routes = [
  { path: "index", component: AppComponent },
  { path: "habi", component: HabitacionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
