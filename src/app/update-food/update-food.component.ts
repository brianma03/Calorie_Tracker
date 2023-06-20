import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  id: number;
  food: Food;
  constructor(private foodService: FoodService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.foodService.getFoodById(this.id).subscribe(data => {
      this.food = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.foodService.updateFood(this.id, this.food).subscribe( data =>{
      this.goToFoodList();
    }
    , error => console.log(error));
  }

  goToFoodList(){
    this.router.navigate(['/foods']);
  }
}