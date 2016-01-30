import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'

import {LangSvc} from '../lang/lang.svc'
import {HeroComponent} from '../hero/hero.component'
import {AboutComponent} from '../about/about.component'
import {EducationComponent} from '../education/education.component'
import {ProjectsComponent} from '../projects/projects.component'


@Component ({
    selector: 'portfolio-app',
    templateUrl: 'app/src/main/main.html',
    directives: [HeroComponent, AboutComponent, ProjectsComponent,
        EducationComponent],
    providers: [HTTP_PROVIDERS, LangSvc]
})
export class MainComponent { }