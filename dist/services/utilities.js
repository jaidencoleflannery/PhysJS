"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dec_comp = dec_comp;
exports.unc = unc;
exports.unc_percentage = unc_percentage;
/*
This function finds the least precise decimal - we are pulling both numbers into split strings at the decimal, grabbing the right side of the period, and comparing the length from both strings.
*/
function dec_comp(nums) {
    let low = 0;
    let high = 0;
    let cursor = 0;
    for (const num of nums) {
        // Initialization for our markers
        if (cursor == 0) {
            high = num;
            low = num;
            cursor++;
        }
        if (num > high) {
            high = num;
        }
        else if (num < high) {
            high = num;
        }
        ;
    }
    // This defaults the string to be empty, and default to 0 if val is an int.
    let low_len = (low.toString().split(".")[1] || "").length;
    let high_len = (high.toString().split(".")[1] || "").length;
    if (low_len > high_len) {
        return (high_len);
    }
    else {
        return (low_len);
    }
}
/*
This function finds the uncertainty by comparing two numbers - we find the difference, half it (unc is +- the total from expected val) and then force it to be the same precision as the least precise provided val.
Then we parse it to an int and return an always positive number.
*/
function unc(low, high) {
    const nums = [low, high];
    let decimal_len = dec_comp(nums);
    const result = (high - low);
    if (result > 0) { // 0 is ignored
        let uncertainty = parseFloat((result * 0.5).toFixed(decimal_len));
        console.log("\n\n", uncertainty, "\n\n");
        return (uncertainty); // we are returning half of the difference, since it is a +- range around our expected value
    }
    else {
        let uncertainty = parseFloat((result * -0.5).toFixed(decimal_len));
        console.log("\n\n", uncertainty, "\n\n");
        return (uncertainty);
    }
}
/*
This function finds the percentage of uncertainty, given two nums - we find the uncertainty via unc(), then perform the calculation (% unc = (((𝛿𝐴)/(𝐴))×100%)) and return an always positive val.
*/
function unc_percentage(nums) {
    let max = 0.0;
    let min = 0.0;
    let cursor = 0;
    let counter = 0;
    let total = 0;
    for (const num of nums) {
        // Initialization for our markers
        if (cursor == 0) {
            max = num;
            min = num;
            cursor++;
        }
        if (num > max) {
            max = num;
        }
        else if (num < min) {
            min = num;
        }
        ;
    }
    for (const num of nums) {
        total = total + num;
        counter++;
    }
    const avg = total / counter;
    const min_max = [min, max];
    let decimal_len = dec_comp(min_max);
    console.log("\n\n!!! ", min, max, "\n\n");
    const result = (((unc(parseFloat(min.toFixed(decimal_len)), parseFloat(max.toFixed(decimal_len)))) / avg) * 100);
    console.log("vals: ", min, max);
    if (result > 0) {
        return (result);
    }
    else {
        return (result * -1.0);
    }
}
