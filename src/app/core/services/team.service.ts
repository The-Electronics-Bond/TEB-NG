import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TeamMember {
    name: string;
    designation: string;
    image: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private teamMembers: TeamMember[] = [
        {
            name: 'Dev Thakur',
            designation: 'Founder & CEO',
            image: 'teams/dev_thakur.jpg',

        },
        {
            name: 'Raghu Raj',
            designation: 'Operation Manager',
            image: 'teams/raghu_raj.jpg',

        },
        {
            name: 'Mohit Kumar',
            designation: 'Relationship Head',
            image: 'teams/mohit_kumar.jpg'

        },
        {
            name: 'Varun Sharma',
            designation: 'Account Head',
            image: 'teams/varun_sharma.jpg'
        },

    ];

    constructor() { }

    getTeamMembers(): Observable<TeamMember[]> {
        return of(this.teamMembers);
    }
}
