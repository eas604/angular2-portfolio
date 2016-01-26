import {Component} from 'angular2/core';

@Component ({
    selector: 'hero',             // CSS selector and element name
    templateUrl: 'app/src/hero/hero.html'
})
export class HeroComponent { 
    public title: string = 'Edwin Sheldon';
    public bullets: string[] = [
        'Software Engineer',
        'Runner',
        'Adventurer'
    ];
}