import {Component, View} from 'angular2/core';

@Component ({
    selector: 'hero'            // CSS selector and element name    
})
@View({
    templateUrl: 'app/src/hero/hero.html'
})
export class HeroComponent { 
    public title: string;
    public bullets: string[];
    
    constructor() {
        this.title = 'Edwin Sheldon';        
        this.bullets = [
            'Software Engineer',
            'Runner',
            'Adventurer'
        ];
    }
}