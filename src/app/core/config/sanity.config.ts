import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: 'PLACEHOLDER_PROJECT_ID', // Replace with your Project ID
    dataset: 'production',               // Replace with your dataset name
    useCdn: true,                        // `false` if you want to ensure fresh data
    apiVersion: '2023-05-03',            // Use the current date
    // token: 'PLACEHOLDER_TOKEN',       // Optional: only if you need to fetch private data
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}
