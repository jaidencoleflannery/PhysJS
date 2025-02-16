"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disp = disp;
exports.time = time;
exports.vel = vel;
exports.speed = speed;
exports.accel = accel;
/*
This function finds displacement - mostly used for other larger functions. Displacement = (Δ𝑥 = (𝑥f−𝑥0)).
Due to technicality, this is also viable for distance.
*/
function disp(start, end) {
    return (end - start);
}
/*
This function finds total time - mostly used for other larger functions. Time = (Δt = (tf−t0)).
*/
function time(start, end) {
    return (end - start);
}
/*
This function finds velocity. v = (Δx/Δt) = ((𝑥f−𝑥0)/(tf−t0)).
Finding average or instantaneous would be up to the user, average = longer distance. instantaneous = extremely tiny distance.
*/
function vel(x, t) {
    return (x / t);
}
/*
This function finds speed. speed = distance traveled divided by elapsed time.
We just use the positive return from average velocity here.
Finding average or instantaneous would be up to the user, average = longer distance. instantaneous = extremely tiny distance.
*/
function speed(x, t) {
    const speed = vel(x, t);
    if (speed >= 0) {
        return speed;
    }
    else {
        return (speed * -1);
    }
}
/*
This function finds acceleration. a = (Δv/Δt) = ((vf-v0)/(tf−t0)).
Finding average or instantaneous would be up to the user, average = longer distance. instantaneous = extremely tiny distance.
*/
function accel(x, t) {
    const accel = (vel(x, t) / t);
    return accel;
}
