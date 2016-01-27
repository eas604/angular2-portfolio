import {Injectable, EventEmitter} from 'angular2/core';
import {enumToString, enumsToString} from '../utilities/utilities'

export enum Language {
    English,
    Español
}

@Injectable()
export class LangSvc {
    private _lang: Language = Language.English;
    public emitter: EventEmitter<Language> = new EventEmitter<Language>();
    
    // constructor() {
    // }
    
    get(): Language {
        return this._lang;
    } getString(): string {
        console.log('Lang exists', typeof this._lang !== 'undefined');
        return enumToString(this._lang, Language);
    } getStringAsync() {
        return Promise.resolve(this.getString());
    } set(lang: Language) {
        console.log('SETTING!!');
        console.log('Lang exists', typeof this._lang !== 'undefined');
        this._lang = lang;
        //this.emitter.emit(this._lang);
    } toggle() {
        // Since I only plan on knowing two for the forseeable future...        
        console.log('TOGGLING!!');
        console.log('Lang exists', typeof this._lang !== 'undefined');
        this._lang = this._lang == Language.English 
            ? Language.Español : Language.English;        
        //this.emitter.emit(this._lang);
    }
}