import { toMonthLetters, toOrdinal, formatDate } from './helpers';

global.console = {
    error: jest.fn()
  }

describe('toOrdinal function', () => {
    const inputMocks = {
        case1 : [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30],
        case2: [1, 21, 31],
        case3: [2, 22],
        case4: [3, 23]
    };

    const outputMocks = {
        case1 : ['4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '24th', '25th', '26th', '27th', '28th', '29th', '30th'],
        case2: ['1st', '21st', '31st'],
        case3: ['2nd', '22nd'],
        case4: ['3rd', '23rd']
    };

    it('should return <number>+st for case1', () => {
        inputMocks.case1.forEach((input, index) => {
            expect(toOrdinal(input)).toEqual(outputMocks.case1[index]);
        });
    });

    it('should return <number>+th for case2', () => {
        inputMocks.case2.forEach((input, index) => {
            expect(toOrdinal(input)).toEqual(outputMocks.case2[index]);
        });
    });

    it('should return <number>+nd for case3', () => {
        inputMocks.case3.forEach((input, index) => {
            expect(toOrdinal(input)).toEqual(outputMocks.case3[index]);
        });
    });

    it('should return <number>+rd for case4', () => {
        inputMocks.case4.forEach((input, index) => {
            expect(toOrdinal(input)).toEqual(outputMocks.case4[index]);
        });
    });

    it('should console.error if the number is not in range 1-31', () => {
        toOrdinal(32);
        toOrdinal(0);
        expect(global.console.error).toHaveBeenCalledTimes(2)
        expect(global.console.error).toHaveBeenCalledWith('input value must be in range 1-31')
    });

    it('should console.error if input type is not a number', () => {
        toOrdinal('1');
        expect(global.console.error).toHaveBeenCalledWith('input type should be a number')
    });
});

describe('toMonthLetter function', () => {
    const monthsMock = {
        '01': 'January', 
        '02': 'February', 
        '03': 'March', 
        '04': 'April', 
        '05': 'May', 
        '06': 'June', 
        '07':'July', 
        '08': 'August', 
        '09':'September', 
        '10': 'October', 
        '11': 'November', 
        '12':'December'
    };

    const inputValuesMock = Object.keys(monthsMock);

    it('should convert month number to letters', () => {
        inputValuesMock.forEach((input) => {
            expect(toMonthLetters(input)).toEqual(monthsMock[input]);
        });
    });

    it('should console.error if input type is not a string', () => {
        toMonthLetters(1);
        expect(global.console.error).toHaveBeenCalledWith('input type should be string')
    });

    it('should console.error if input value is not in inputValuesMock', () => {
        inputValuesMock.forEach((input) => {
            toMonthLetters('22');
            expect(global.console.error).toHaveBeenCalledWith('invalid input value')
        });
    });
});