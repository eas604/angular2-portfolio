import {Component} from 'angular2/core';

export class Project {
    constructor(public name: string, 
        public description: string[],
        public role: string,
        public client: string,
        public keywords: string[],
        public subtitle?: string ) {        
    }
}

@Component ({
    selector: 'project',
    inputs: ['project'],
    templateUrl: 'app/src/project/project.html'      
})
export class ProjectComponent {
   public project: Project;
}