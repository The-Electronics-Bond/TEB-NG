import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { environment } from '../../../environments/environment';

export const sanityClient = createClient({
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    useCdn: environment.sanity.useCdn,
    apiVersion: environment.sanity.apiVersion,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}
