import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseURL = 'http://localhost:8080/api/v1/food';
  constructor(private httpClient: HttpClient) { }

  getFoodList(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(`${this.baseURL}`);
  }

  createFood(food: Food): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseURL}`, food);
  }

  getFoodById(id: number): Observable<Food> {
    return this.httpClient.get<Food>(`${this.baseURL}/${id}`);
  }

  updateFood(id: number, food: Food): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`, food);
  }

  deleteFood(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
