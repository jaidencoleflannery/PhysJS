"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dec_comp = dec_comp;
exports.unc = unc;
exports.unc_percentage = unc_percentage;
/*
This function finds the least precise decimal - we are pulling both numbers into split strings at the decimal, grabbing the right side of the period, and comparing the length from both strings.
*/
function dec_comp(low, high) {
    if ((low.toString().split(".")[1].length) > (high.toString().split(".")[1].length)) {
        return (low.toString().split(".")[1].length);
    }
    else {
        return (high.toString().split(".")[1].length);
    }
}
/*
This function finds the uncertainty by comparing two numbers - we find the difference, half it (unc is +- the total from expected val) and then force it to be the same precision as the least precise provided val.
Then we parse it to an int and return an always positive number.
*/
function unc(low, high) {
    let decimal_len = dec_comp(low, high);
    const result = (high - low);
    if (result > 0) { // 0 is ignored
        let uncertainty = parseInt((result * 0.5).toFixed(decimal_len));
        return (uncertainty); // we are returning half of the difference, since it is a +- range around our expected value
    }
    else {
        let uncertainty = parseInt((result * -0.5).toFixed(decimal_len));
        return (uncertainty);
    }
}
/*
This function finds the percentage of uncertainty, given two nums - we find the uncertainty via unc(), then perform the calculation (% unc = (((𝛿𝐴)/(𝐴))×100%)) and return an always positive val.
*/
function unc_percentage(low, high, expected) {
    const result = (((unc(low, high)) / expected) * 100);
    if (result > 0) {
        return (result);
    }
    else {
        return (result * -1.0);
    }
}
