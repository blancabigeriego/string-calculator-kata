export class StringCalculator {
    add(...strings) {
        if (strings.length === 0) return 0;
        
        let sum = 0;
        for (let string of strings) {
            const numbers = string.split(/[,\n]+/); 
            for (let number of numbers) {
                let parsedNumber;
                if (number === '') {
                    parsedNumber = 0;
                } else {
                    parsedNumber = parseInt(number);
                    if (isNaN(parsedNumber)) {
                        return NaN;
                    }
                }
                sum += parsedNumber;
            }
        }
        
        return sum;
    }
}
