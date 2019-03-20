// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function minimumTime(numOfParts, parts) {
    // WRITE YOUR CODE HERE
    let newArray = [];
    //create a variable to alter the sum
    console.log("parts" + parts);
    console.log("num of parts" + numOfParts);
    //first find the sum of size all the parts
    //loop through the list of parts and sum them up 
    let sum = 0;
    for (let i = 1; i < (numOfParts - 1); i++) {
        console.log("parts in first" + parts[i]);
        sum = sum + parts[i];
        console.log(sum)
    }
    //this will hold the first value of the array
    const first = parts.shift()
    //this will hold the last value of the array
    const last = parts.pop();
    console.log("first", first, "last", last)
    //adding first value plus the additional values 
    //plus the last value of the array
    sum = sum + first + last;
    console.log("final sum", sum)
    //console.log("first"+ first, "last", last)
    // for (let k=0; k< parts.size;k++){
    //   console.log("num of parts in second" + numOfParts);
    // if(i ===1 || i===parts.size){
    //     return sum+ parts[i];
    // }else{
    //     value1=parts[k] + parts[k+1];

    //   console.log("value 1", value1)
    // }

    //     console.log("value in second loop", value1, value2)
    //      time= time+ value1;
    //     console.log("sum" + time)



    //     }
    // }


    // return sum;

    //then divide them by 2 to find how many workers it will take

}
// FUNCTION SIGNATURE ENDS


// -----------second question------
// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function minimumCostIncurred(numTotalEdgeNodes,
    numTotalAvailableNetworkRoutes,
    networkRoutesAvailable,
    numNewNetworkRoutesConstruct,
    costNewNetworkRoutesConstruct) {
    // WRITE YOUR CODE HERE
}
// FUNCTION SIGNATURE ENDS

// ------fix code------
function solution(M, A) {
    var N = A.length;
    var count = new Array(M + 1);
    var i;
    for (i = 0; i <= M; i++)
        count[i] = 0;
    var maxOccurence = 1;
    var index = -1;
    for (i = 0; i < N; i++) {
        if (count[A[i]] > 0) {
            var tmp = count[A[i]];
            if (tmp > maxOccurence) {
                maxOccurence = tmp;
                index = i;
            }
            count[A[i]] = tmp + 1;
        } else {
            count[A[i]] = 1;
        }
    }
    return A[index];
}