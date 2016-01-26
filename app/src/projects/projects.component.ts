import {Component, View} from 'angular2/core';
import {Project, ProjectComponent} from '../project/project.component';

class ProjectsVM {
    public title: string;
    public projects: Project[];
}

@Component ({
    selector: 'projects',             // CSS selector and element name
    directives: [ProjectComponent],
    templateUrl: 'app/src/projects/projects.html'
})
// @View({
    
// })
export class ProjectsComponent {
    
    private vm: ProjectsVM = new ProjectsVM();
    
    constructor() {
        // TODO: load from JSON, internationalize
        this.vm.title = 'Selected Projects';
        
        var sedman = new Project(
            'SEDMAN',
            [
                "A decision support tool to help engineers locate possible sediment management solution technologies based on their input criteria.",
                "The application is a mobile-first responsive website developed using AngularJS and Bootstrap."
            ],
            'Lead Developer (Phase 2)',
            'Engineer Research and Development Center (ERDC)',
            [
                "AngularJS",
                "C#",
                "Mobile",
                "Web",
                "MVC",
                "Bootstrap"
            ],
            'Sediment Management Technologies'
        );
        
        var placementTool = new Project(
            'CE-DREDGE Strategic Placement Tool',
            [
                'A web map viewer to help the Corps of Engineers optimize dredging activities.',
                'A data integration framework incorporating information from a multitude of web services and applications to aid in planning activities.'
            ],
            'Client: Engineering Research and Development Center (ERDC)',
            'Lead Developer',
            [
                'AngularJS', 
                'MVVM', 
                'ESRI JSAPI', 
                'Bootstrap',
                'Python', 
                'RESTful web services', 
                'angular-esri-map'
            ]
        );
        
        this.vm.projects = [sedman, placementTool];
    }
}