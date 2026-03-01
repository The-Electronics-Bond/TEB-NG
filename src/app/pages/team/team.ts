import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService, TeamMember } from '../../core/services/team.service';
import { SanityService } from '../../core/services/sanity.service';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './team.html',
    styleUrl: './team.scss',
})
export class Team implements OnInit {
    teamMembers: TeamMember[] = [];

    // Keeping these as they are not currently in Sanity schema but used in template
    managementTeam = [
        {
            name: 'Executive Leadership',
            members: [
                { name: 'Arshdeep Singh', role: 'Managing Director', icon: '👤' },
                { name: 'Senior Management', role: 'Operations & Strategy', icon: '👥' }
            ]
        }
    ];

    departments = [
        {
            name: 'Sales & Client Relations',
            members: [
                { name: 'Corporate Sales', handle: 'sales@theelectronicsbond.com', role: 'B2B Solutions' },
                { name: 'Hospitality Desk', handle: 'hospitality@theelectronicsbond.com', role: 'Hotels & Resorts' },
                { name: 'Government Tenders', handle: 'govt@theelectronicsbond.com', role: 'Public Sector' }
            ]
        },
        {
            name: 'Technical & Support',
            members: [
                { name: 'AV Integration Team', handle: 'support@theelectronicsbond.com', role: 'Installation & Setup' },
                { name: 'After Sales Service', handle: 'service@theelectronicsbond.com', role: 'Maintenance & Warranty' }
            ]
        },
        {
            name: 'Accounts & Finance',
            members: [
                { name: 'Billing Department', handle: 'accounts@theelectronicsbond.com', role: 'Invoices & Payments' }
            ]
        }
    ];

    constructor(
        private teamService: TeamService,
        private sanityService: SanityService
    ) { }

    ngOnInit(): void {
        this.teamService.getTeamMembers().subscribe(members => {
            this.teamMembers = members;
        });
    }

    getImageUrl(source: any): string {
        return this.sanityService.getImageUrl(source).url();
    }
}
