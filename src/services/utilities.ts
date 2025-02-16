/* 
This function finds the least precise decimal - we are pulling both numbers into split strings at the decimal, grabbing the right side of the period, and comparing the length from both strings.
*/
export function dec_comp (nums: Iterable<number>) {
    let low = 0;
    let high = 0;
    let cursor = 0;
    for(const num of nums){
        // Initialization for our markers
        if (cursor == 0) { 
            high = num; 
            low = num; 
            cursor++;
        }
        if (num > high) {
            high = num 
        }
        else if (num < high) { 
            low = num 
        };
    }
    // This defaults the string to be empty, and default to 0 if val is an int.
    let low_len  = (low.toString().split(".")[1]  || "").length;
    let high_len = (high.toString().split(".")[1] || "").length;
    if (low_len > high_len && high_len != 0) {
        return (high_len);
    } else if (high_len > low_len && low_len != 0) {
        return (low_len);
    } else {
        return 1;
    }
}

/* 
This function finds the uncertainty - then we parse it to an int and return an always positive number.
The user can optionally pass in a string for which type of mean they are calculation, but we default to pop.

Note: the uncertainty of a dataset is the standard deviation.
*/
export function unc (nums: Iterable<number>, meanType?: 'sample' | 'population') {
    const vals = Array.from(nums);
    let type = meanType || 'population';
    let decimal_len: number = dec_comp(nums);
    let total: number = 0.0;
    let mean: number = 0.0;
    let counter: number = 0.0;
    let squared_sum: number = 0.0;
    let std_deviation: number = 0.0;
    let flag = 0;

    // We get total and average.
    for (let cursor: number = 0; cursor < vals.length; cursor++) {
        total = total + vals[cursor];
        counter++;
    }
    mean = total / counter;
    // Then take the average from each val, and then square it and add them together.
    for (let cursor: number = 0; cursor < vals.length; cursor++) {
        squared_sum = squared_sum + Math.pow((vals[cursor] - mean), 2.0);
    }

    // Then we divide that total (we decrease by 1 for the sample formula, we are using a flag so we can keep counter for the final division).
    if (type === 'sample'){
        flag = -1;
    }
    std_deviation = Math.sqrt(squared_sum / (counter + flag));
    // Then we divide by the square root of length, and round up the decimal to the shortest (least precise) provided val.
    let uncertainty: number = parseFloat((std_deviation).toFixed(decimal_len));
    return(uncertainty);
}

/*
This function finds the percentage of uncertainty, given two nums - we find the uncertainty via unc(), then perform the calculation (% unc = (((𝛿𝐴)/(𝐴))×100%)) and return an always positive val.
*/
export function unc_percentage (nums: Iterable<number>, meanType?: 'sample' | 'population') {
    let type = meanType || 'population';
    let counter: number = 0;
    let total: number = 0;
    const decimal_len: number = dec_comp(nums);
    for(const num of nums){
        total = total + num;
        counter++;
    }
    const avg: number = total / counter;
    console.log("!: ", meanType, unc(nums, meanType));
    const result = (((parseFloat(unc(nums, meanType).toFixed(decimal_len))) / avg) * 100);
    if(result > 0) {
        return(result);
    } else {
        return(result * -1.0);
    }   
}