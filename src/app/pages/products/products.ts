import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDataService, Category } from '../../core/services/product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  categories$: Observable<Category[]> | undefined;

  constructor(private productService: ProductDataService) { }

  ngOnInit(): void {
    this.categories$ = this.productService.getAllCategories();
  }
}
