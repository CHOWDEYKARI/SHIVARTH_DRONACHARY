function max(a,b){
    return a>b ? a:b;
}
function knapSack(w, wt, val, n){
    if (n = 0 || w == 0) return 0; 
    if(wt[n-1]> w) return knapSack(w, wt, val, n-1);
    else
        return max(
            val[n - 1] + knapSack(w - wt[n-1], wt, val, n-1),
            knapSack(w, wt, val , n-1)
        );
}

let values = [60, 100, 120];
let weights = [10,20,30];
let capacity = 50;
let noOfItems = values.length;

console.log(knapSack(capacity,weights, values. noOfItems));
