"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = difference;
exports.percentage = percentage;
function difference(low, high) {
    const result = ((high - low) * (-1));
    if (result >= 0) {
        return (result * 0.5); // we are returning half of the difference, since it is a +- range around our expected value
    }
    else {
        return (result * -0.5);
    }
}
function percentage(low, high, expected) {
    const result = (((difference(low, high)) / expected) * 100);
    if (result >= 0) {
        return (result * 1.0);
    }
    else {
        return (result * -1.0);
    }
}
