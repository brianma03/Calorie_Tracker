import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  id: number = 0;
  food: Food;
  constructor(private route: ActivatedRoute, private router: Router, private foodService: FoodService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.food = new Food();
    this.foodService.getFoodById(this.id).subscribe( data => {
      this.food = data;
    });
  }

  goBack(){
    this.router.navigate(['/foods']);
  }
}