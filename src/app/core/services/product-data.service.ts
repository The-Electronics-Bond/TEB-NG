import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sanityClient } from '../config/sanity.config';

export interface Product {
    _id: string;
    name: string;
    brand: string;
    description: string;
    image?: any;
    imageUrl?: string;
    specifications: string[];
}

export interface Category {
    _id: string;
    name: string;
    slug: { current: string };
    description: string;
    image?: any;
    imageUrl?: string;
    products?: Product[];
}

@Injectable({
    providedIn: 'root'
})
export class ProductDataService {

    // Fetch all categories for the main grid
    getAllCategories(): Observable<Category[]> {
        const query = `*[_type == "category"]{
            _id,
            name,
            slug,
            description,
            "imageUrl": image.asset->url
        }`;
        return from(sanityClient.fetch(query));
    }

    // Fetch a single category and its associated products by slug
    getCategoryBySlug(slug: string): Observable<Category | undefined> {
        const query = `*[_type == "category" && slug.current == $slug][0]{
            _id,
            name,
            slug,
            description,
            "imageUrl": image.asset->url,
            "products": *[_type == "product" && references(^._id)]{
                _id,
                name,
                brand,
                description,
                "imageUrl": image.asset->url,
                specifications
            }
        }`;
        return from(sanityClient.fetch(query, { slug }));
    }
}
