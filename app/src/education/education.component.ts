import {Component} from 'angular2/core';
import {Http} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {FromJSON} from '../utilities/fromJSON'
import {Serializable} from '../utilities/serializable'

class EducationVM extends Serializable {
    public title: string;
    public degrees: any[];
}

@Component ({
    selector: 'education',
    templateUrl: 'app/src/education/education.html'
})
export class EducationComponent extends FromJSON {
    
    constructor(http: Http, private _lang: LangSvc) {
        super(http, _lang, 'app/src/education/education.json',
            new EducationVM());
    }    
    
    minorText(len): string {
        if (this._lang.getString() == 'English') {
            return len > 1 ? 'Minor Concentrations' 
                : 'Minor Concentration';
        } else {
            return len > 1 ? 'Concentraciones Menores' 
                : 'Concentración Menor';
        }
    }
}