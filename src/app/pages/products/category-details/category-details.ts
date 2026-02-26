import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductDataService, Category } from '../../../core/services/product-data.service';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-category-details',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './category-details.html',
    styleUrl: './category-details.scss'
})
export class ProductCategory implements OnInit {
    category$: Observable<Category | undefined> | undefined;
    categoryId: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductDataService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.categoryId = params.get('category');
            if (this.categoryId) {
                this.category$ = this.productService.getCategoryBySlug(this.categoryId);
            }
        });
    }
}
