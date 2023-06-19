import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { CreateFoodComponent } from './create-food/create-food.component';

const routes: Routes = [
  {path: 'foods', component: FoodListComponent},
  {path: 'create-food', component: CreateFoodComponent},
  {path: '', redirectTo: 'foods', pathMatch: 'full'},
  {path: 'update-food/:id', component: UpdateFoodComponent},
  {path: 'food-details/:id', component: FoodDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
