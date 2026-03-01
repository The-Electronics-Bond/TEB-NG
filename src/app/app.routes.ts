import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Solutions } from './pages/solutions/solutions';
import { Products } from './pages/products/products';
import { ProductCategory } from './pages/products/category-details/category-details';
import { Brands } from './pages/brands/brands';
import { Clients } from './pages/clients/clients';
import { Contact } from './pages/contact/contact';
import { Team } from './pages/team/team';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        data: {
            title: 'The Electronics Bond - Home',
            description: 'Welcome to The Electronics Bond, your premier source for electronic components and solutions.'
        }
    },
    {
        path: 'about',
        component: About,
        data: {
            title: 'About Us - The Electronics Bond',
            description: 'Learn more about The Electronics Bond, our mission, and our team.'
        }
    },
    {
        path: 'solutions',
        component: Solutions,
        data: {
            title: 'Our Solutions - The Electronics Bond',
            description: 'Explore the innovative electronic solutions we offer.'
        }
    },
    {
        path: 'products',
        component: Products,
        data: {
            title: 'Products - The Electronics Bond',
            description: 'Browse our extensive catalog of electronic products.'
        }
    },
    {
        path: 'products/:category',
        component: ProductCategory,
        data: {
            title: 'Product Category - The Electronics Bond',
            description: 'Browse products by category.'
        }
    },
    {
        path: 'brands',
        component: Brands,
        data: {
            title: 'Brands We Work With - The Electronics Bond',
            description: 'Discover the trusted brands we partner with.'
        }
    },
    {
        path: 'clients',
        component: Clients,
        data: {
            title: 'Our Clients - The Electronics Bond',
            description: 'See the clients who trust The Electronics Bond.'
        }
    },
    {
        path: 'team',
        component: Team,
        data: {
            title: 'Our Team - The Electronics Bond',
            description: 'Meet the dedicated experts at The Electronics Bond.'
        }
    },
    {
        path: 'contact',
        component: Contact,
        data: {
            title: 'Contact Us - The Electronics Bond',
            description: 'Get in touch with us for inquiries and support.'
        }
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
