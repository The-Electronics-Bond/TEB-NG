import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamService, TeamMember } from '../../core/services/team.service';
import { SanityService } from '../../core/services/sanity.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './team.html',
    styleUrl: './team.scss',
})
export class Team {
    teamMembers$: Observable<TeamMember[]>;

    constructor(
        private teamService: TeamService,
        private sanityService: SanityService,
    ) {
        this.teamMembers$ = this.teamService.getTeamMembers();
    }

    getImageUrl(source: any): string {
        return this.sanityService.getImageUrl(source).url();
    }
}
