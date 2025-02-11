export function len (value: number, unit: string) {

    if(unit === "meters") {
        let conversion = value * 3.28084;
        return conversion;
    } else if(unit === "feet") {
        let conversion = value / 3.28084;
        return conversion;
    } else {
        throw new Error("Invalid unit. Valid units include: 'meters' 'feet'");
    }
    
}

export function weight (value: number, unit: string) {

    if(unit === "lbs") {
        let conversion = value * 0.453592;
        return conversion;
    } else if(unit === "kg") {
        let conversion = value / 0.453592;
        return conversion;
    } else {
        throw new Error("Invalid unit. Valid units include: 'lbs' 'kg'");
    }
    
}

export function time (value: number, unit: string) {

    if(unit === "minutes") {
        let conversion = value / 60;
        return conversion;
    } else if(unit === "hours") {
        let conversion = value / 3600;
        return conversion;
    } else if(unit === "days") {
        let conversion = value / 86400;
        return conversion;
    } else if(unit === "weeks") {
        let conversion = value / 604800;
        return conversion;
    }else {
        throw new Error("Invalid time unit. Valid units include: 'minutes' 'hours' 'days' 'weeks'");
    }
    
}