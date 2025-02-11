/* 
This function finds the least precise decimal - we are pulling both numbers into split strings at the decimal, grabbing the right side of the period, and comparing the length from both strings.
*/
export function dec_comp (low: number, high: number) {
    if ((low.toString().split(".")[1].length) > (high.toString().split(".")[1].length)) {
        return (low.toString().split(".")[1].length);
    } else {
        return (high.toString().split(".")[1].length);
    }
}

/* 
This function finds the uncertainty by comparing two numbers - we find the difference, half it (unc is +- the total from expected val) and then force it to be the same precision as the least precise provided val. 
Then we parse it to an int and return an always positive number.
*/
export function unc (low: number, high: number) {
    let decimal_len: number = dec_comp(low, high);
    const result: number = (high - low);
    if(result > 0) { // 0 is ignored
        let uncertainty: number = parseInt((result * 0.5).toFixed(decimal_len));
        return(uncertainty); // we are returning half of the difference, since it is a +- range around our expected value
    } else {
        let uncertainty: number = parseInt((result * -0.5).toFixed(decimal_len));
        return(uncertainty);
    }
}

/*
This function finds the percentage of uncertainty, given two nums - we find the uncertainty via unc(), then perform the calculation (% unc = (((𝛿𝐴)/(𝐴))×100%)) and return an always positive val.
*/
export function unc_percentage (low: number, high: number, expected: number) {
    const result = (((unc(low, high)) / expected) * 100);
    if(result > 0) {
        return(result);
    } else {
        return(result * -1.0);
    }
}