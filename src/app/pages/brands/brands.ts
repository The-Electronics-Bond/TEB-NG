import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Brand } from '../../core/services/product.service';
import { SanityService } from '../../core/services/sanity.service';
import { GroupixSpinnerModule } from '@groupix/groupix-spinner';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, RouterLink, GroupixSpinnerModule],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands implements OnInit {
  brands: Brand[] = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private sanityService: SanityService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.productService.getBrands().subscribe((brands) => {
      this.ngZone.run(() => {
        this.brands = brands;
        this.loading = false;
        this.cdr.detectChanges();
      });
    });
  }

  getImageUrl(source: any): string {
    return source ? this.sanityService.getImageUrl(source).url() : 'https://placehold.co/200x100?text=No+Image';
  }
}
