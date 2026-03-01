import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SanityService } from './sanity.service';

export interface TeamMember {
    name: string;
    role: string;
    designation?: string; // For backward compatibility
    image: any;
    bio?: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
    };
    order?: number;
}

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    constructor(private sanityService: SanityService) { }

    getTeamMembers(): Observable<TeamMember[]> {
        const query = `*[_type == "teamMember"] | order(order asc, name asc)`;
        return from(this.sanityService.fetch<TeamMember[]>(query));
    }
}
