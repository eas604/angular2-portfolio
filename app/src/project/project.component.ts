import {Component, View} from 'angular2/core';

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
    selector: 'project',             // CSS selector and element name
    inputs: ['project']    
})
@View({
    templateUrl: 'app/src/project/project.html'
})
export class ProjectComponent {
   public project: Project;
}