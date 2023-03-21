import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesOfferComponent } from './services-offer/services-offer.component';

const routes: Routes = [
  { path: 'Index', component: IndexPageComponent },
  { path: 'services', component: ServicesOfferComponent ,
  children: [
    {
      path: 'index-services', // child route path
      component: ServicesOfferComponent, // child route component that the router renders
    }
  ],  
},
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '',   redirectTo: '/Index', pathMatch: 'full' }, // redirect to `first-component`
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
