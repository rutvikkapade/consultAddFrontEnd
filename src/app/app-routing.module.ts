import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent} from './parent/currency/currency.component'
import { BirthdayComponent } from './parent/birthday/birthday.component';

const routes: Routes = [{path :'currency', component: CurrencyComponent},
{path :'birthdaySorter', component: BirthdayComponent}
,{path :'', redirectTo: '/currency', pathMatch: 'full'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
