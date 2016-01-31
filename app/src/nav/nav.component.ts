import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc, Language} from '../lang/lang.svc'
import {FromJSON} from '../utilities/fromJSON'
import {Serializable, enumToString, enumsToString}
    from '../utilities/utilities'

class Link extends Serializable {
    public title: string = '';
    public url: string = '';
}

class NavVM extends Serializable {
    public brand: Link = new Link();
    public links: Link[];
    public languages: string;
}

@Component ({
    selector: 'nav',
    templateUrl: 'app/src/nav/nav.html'
})
export class NavComponent extends FromJSON {
    
    private _languages: string[];
    
    constructor(http: Http, lang: LangSvc) {
        super(http, lang, 'app/src/nav/nav.json', new NavVM());
        this._languages = enumsToString([Language.English, Language.Español],
            Language);        
    }
}