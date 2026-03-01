import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SanityService } from './sanity.service';

export interface Category {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    description?: string;
    image?: any;
}

export interface Brand {
    _id: string;
    name: string;
    logo?: any;
    website?: string;
}

export interface Product {
    _id: string;
    name: string;
    description?: string;
    image?: any;
    brands?: string[]; // Resolved brand names
    category: {
        _ref: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private sanityService: SanityService) { }

    getCategories(): Observable<Category[]> {
        const query = `*[_type == "category"] | order(order asc, title asc)`;
        return from(this.sanityService.fetch<Category[]>(query));
    }

    getProductsByCategory(categoryId: string): Observable<Product[]> {
        const query = `*[_type == "product" && category._ref == $categoryId] | order(order asc, name asc) {
            ...,
            "brands": brands[]->name
        }`;
        return from(this.sanityService.fetch<Product[]>(query, { categoryId }));
    }

    getProductsByCategorySlug(slug: string): Observable<Product[]> {
        const query = `*[_type == "product" && category->slug.current == $slug] | order(order asc, name asc) {
            ...,
            "brands": brands[]->name
        }`;
        return from(this.sanityService.fetch<Product[]>(query, { slug }));
    }

    getBrands(): Observable<Brand[]> {
        const query = `*[_type == "brand"] | order(name asc)`;
        return from(this.sanityService.fetch<Brand[]>(query));
    }
}
