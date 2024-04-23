export class StringCalculator {
    add(...strings){
        if (strings.length === 0) return 0;
        
        let sum = 0;
        for (let string of strings) {
            let parsedNumber = parseInt(string);
            sum += parsedNumber;
        }
        
        return sum;
    }
}