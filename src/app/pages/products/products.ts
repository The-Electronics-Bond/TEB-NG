import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Category, Product } from '../../core/services/product.service';
import { SanityService } from '../../core/services/sanity.service';
import { GroupixSpinnerModule } from '@groupix/groupix-spinner';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, GroupixSpinnerModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];
  loading = false;

  constructor(
    private productService: ProductService,
    private sanityService: SanityService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.productService.getCategories().subscribe((categories) => {
      this.ngZone.run(() => {
        this.categories = categories;
        this.loading = false;
        this.cdr.detectChanges();
      });
    });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.loading = true;
    this.productService.getProductsByCategorySlug(category.slug.current).subscribe((products) => {
      this.ngZone.run(() => {
        this.products = products;
        this.loading = false;
        this.cdr.detectChanges();
      });
    });
  }

  backToCategories(): void {
    this.selectedCategory = null;
    this.products = [];
  }

  getImageUrl(source: any): string {
    return source ? this.sanityService.getImageUrl(source).url() : 'https://placehold.co/400x300?text=No+Image';
  }
}
