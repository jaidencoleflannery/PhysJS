/* 
This function finds displacement - mostly used for other larger functions. Displacement = (Δ𝑥 = (𝑥f−𝑥0)).
Due to technicality, this is also viable for distance.
*/
export function disp (start: number, end: number) {
     return (end - start);
}

/* 
This function finds total time - mostly used for other larger functions. Time = (Δt = (tf−t0)).
*/
export function time (start: number, end: number) {
    return (end - start);
}

/* 
This function finds velocity. v = (Δx/Δt) = ((𝑥f−𝑥0)/(tf−t0)).
Finding average or instantaneous would be up to the user, average = longer distance. instantaneous = extremely tiny distance.
*/
export function vel (x: number, t: number) {
    return (x / t);
}

/* 
This function finds speed. speed = distance traveled divided by elapsed time.
We just use the positive return from average velocity here.
Finding average or instantaneous would be up to the user, average = longer distance. instantaneous = extremely tiny distance.
*/
export function speed (x: number, t: number) {
    const speed: number = vel(x, t);
    if (speed >= 0) {
        return speed;
    } else {
        return (speed * -1);
    }
}

/*
This function finds acceleration. a = (Δv/Δt) = ((vf-v0)/(tf−t0)).
Finding average or instantaneous would be up to the user, average = longer distance. instantaneous = extremely tiny distance.
*/
export function accel (x: number, t: number) {
    const accel: number = (vel(x, t) / t);
    return accel;
}