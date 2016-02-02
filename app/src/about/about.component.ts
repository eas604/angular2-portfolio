import {Component} from 'angular2/core';
import {Http} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {FromJSON} from '../utilities/fromJSON'
import {Serializable} from '../utilities/utilities'

class AboutVM extends Serializable {
    public title: string;
    public messages: string[];
}

@Component({
    selector: 'about',
    templateUrl: 'app/src/about/about.html'
})
export class AboutComponent extends FromJSON {

    constructor(http: Http, lang: LangSvc) {
        super(http, lang, 'app/src/about/about.json', new AboutVM());
    }
}