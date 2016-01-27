import {bootstrap} from 'angular2/platform/browser'
import {MainComponent} from '../main/main.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import {HeroComponent} from '../hero/hero.component'
import {LangSvc} from '../lang/lang.svc'
import {AboutComponent} from '../about/about.component'
import {EducationComponent} from '../education/education.component'
import {ProjectsComponent} from '../projects/projects.component'

bootstrap(MainComponent);
bootstrap(HeroComponent);
bootstrap(AboutComponent, [HTTP_PROVIDERS, LangSvc]);
bootstrap(EducationComponent);
bootstrap(ProjectsComponent);