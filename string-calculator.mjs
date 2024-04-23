export class StringCalculator {
    add(string1, string2 = '0', string3 = '0', string4 = 0){
        if(string1 === '')
        return 0;
        if(string1 !== null ) 
        return parseInt(string1) + parseInt(string2) + parseInt(string3) + parseInt(string4)
        
    }
}