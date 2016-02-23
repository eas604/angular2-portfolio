import {Component} from 'angular2/core';
import {Project, ProjectComponent} from '../project/project.component';
import {Http} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {FromJSON} from '../utilities/fromJSON'
import {Serializable} from '../utilities/serializable'


class ProjectsVM extends Serializable {
    public title: string;
    public projects: Project[];
}

@Component ({
    selector: 'projects',
    directives: [ProjectComponent],
    templateUrl: 'app/src/projects/projects.html'
})
export class ProjectsComponent extends FromJSON {    
    constructor(http: Http, lang: LangSvc) {
        super(http, lang, 'app/src/projects/projects.json', new ProjectsVM());
    }
    // todo: translate project descriptions to Spanish 
}