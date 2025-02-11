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
This function finds average velocity. v = (Δx/Δt) = ((𝑥f−𝑥0)/(tf−t0)).
*/
export function avg_vel (start_t: number, end_t: number, start_x: number, end_x: number) {
    return (disp(start_x, end_x) / time(start_t, end_t));
}

/* 
This function finds instantaneous speed. speed = distance traveled divided by elapsed time.
We just use the positive return from average velocity here.
*/
export function inst_speed (start_t: number, end_t: number, start_x: number, end_x: number) {
    const speed: number = avg_vel(start_t, end_t, start_x, end_x);
    if (speed >= 0) {
        return speed;
    } else {
        return (speed * -1);
    }
}