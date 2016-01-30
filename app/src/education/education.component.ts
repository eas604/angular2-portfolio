import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {Serializable, enumToString, enumsToString}
    from '../utilities/utilities'

class EducationVM extends Serializable {
    public title: string;
    public degrees: any[];
}

@Component ({
    selector: 'education',
    templateUrl: 'app/src/education/education.html'
})
export class EducationComponent {
    
    private vm: EducationVM = new EducationVM();
    private _curLang: string = 'English';
    
    constructor(private _http: Http, private _lang: LangSvc) {        
    }    
    
    ngOnInit(): void {
        this.getJSON();
        this._lang.emitter.subscribe((data) => {
            this.getJSON();
        });
    }
    
    minorText(len): string {
        if (this._curLang == 'English') {
            return len > 1 ? 'Minor Concentrations' : 'Minor Concentration';
        } else {
            return len > 1 ? 'Concentraciones Menores' : 'Concentración Menor';
        }
    }
    
    getJSON(): void {
        this._http.get('app/src/education/education.json').subscribe(res => {
            this._curLang = this._lang.getString();
            this.vm.fromJSON(res.json()[this._curLang]);
        });          
    }
}