import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SavePdfDataComponent } from './save-pdf-data/save-pdf-data.component';


// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path:'home-page', component:HomePageComponent},
  { path:'save-pdf-data', component:SavePdfDataComponent}

];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
