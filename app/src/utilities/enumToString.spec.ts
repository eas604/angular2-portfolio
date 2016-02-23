import {enumsToString, enumToString} from './enumToString'

describe('enumToString tests', function() {
    
    enum Colors {
        'Red',
        'Blue',
        'Marrón'
    }

    it('enum: converts Red to string', () => {        
        expect(enumToString(Colors.Red, Colors)).toBe('Red');
    });     
    
    it('enum: converts Blue to string', () => {        
        expect(enumToString(Colors.Blue, Colors)).toBe('Blue');
    });  
    
    it('enum: converts Marrón to string and respects unicode', () => {        
        expect(enumToString(Colors.Marrón, Colors)).toBe('Marrón');
    });
    
    it('enums: converts Blue and Marrón to a string list', () => {
        let l = [Colors.Blue, Colors.Marrón];
        expect(enumsToString(l, Colors)).toEqual(['Blue', 'Marrón']); 
    });

});