import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'

import {MainComponent} from '../main/main.component'
import {LangSvc} from '../lang/lang.svc'

bootstrap(MainComponent, [HTTP_PROVIDERS, LangSvc]);