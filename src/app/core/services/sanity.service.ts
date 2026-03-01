import { Injectable } from '@angular/core';
import { createClient, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

@Injectable({
    providedIn: 'root'
})
export class SanityService {
    private client: SanityClient;
    private builder: any;

    constructor() {
        this.client = createClient({
            projectId: 'o4jdw3vx',
            dataset: 'production',
            useCdn: true,
            apiVersion: '2024-03-01',
        });
        this.builder = imageUrlBuilder(this.client);
    }

    async fetch<T>(query: string, params: any = {}): Promise<T> {
        return await this.client.fetch<T>(query, params);
    }

    getImageUrl(source: any): any {
        return this.builder.image(source);
    }
}
