import {Component} from 'angular2/core';
import {Http} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {FromJSON} from '../utilities/fromJSON'
import {Serializable} from '../utilities/serializable'

class Link extends Serializable {
    public title: string;
    public url: string;
}

class ContactVM extends Serializable {
    public title: string;
    public links: Link[];
}

@Component({
    selector: 'contact',
    templateUrl: 'app/src/contact/contact.html'
})
export class ContactComponent extends FromJSON {

    constructor(http: Http, lang: LangSvc) {
        super(http, lang, 'app/src/contact/contact.json', new ContactVM());
    }
}