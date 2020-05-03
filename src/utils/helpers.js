function toOrdinal(num) {
    num = num.toString();
    if (num === '11' || num === '12' || num === '13') {
        return num + 'th';
    }
    if (num.slice(-1) === '1') {
        return num + 'st';
    }
    if (num.slice(-1) === '2') {
        return num + 'nd';
    }
    if (num.slice(-1) === '3') {
        return num + 'rd';
    }
    return num + 'th';
}

function toMonthLetters(month) {
    switch(month) {
        case '01':
            return 'January';
        case '02': 
            return 'February';
        case '03':
            return 'March';
        case '04':
            return 'April';
        case '05': 
            return 'May';
        case '06':
            return 'June';
        case '07':
            return 'July';
        case '08':
            return 'August';
        case '09':
            return 'September';
        case '10':
            return 'October';
        case '11':
            return 'November';
        default:
            return 'December';
    }
}

export function formatDate(date) {
    const year = date.slice(0, 4);
    const month = toMonthLetters(date.slice(5, 7));
    const day = date.slice(8, 10);
    const ordinalDay = toOrdinal(day[0] === '0' ? day[1]: day);
    return `published on ${month} ${ordinalDay}, ${year}`;  
}

export function turnIntoPercent(votes) {
    const totalVotes = votes.reduce((a, b) => a + b);
    return votes.map(vote =>  vote ? Math.round((vote / totalVotes) * 100 ): 0);
}