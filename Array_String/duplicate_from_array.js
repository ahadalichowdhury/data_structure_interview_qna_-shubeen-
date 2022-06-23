function remove_duplicate(nums){
    let n= nums.length;
    let current_index = 0;
    for(let i=0; i<n; i++){
        if(nums[i]!= nums[i-1]){
            nums[current_index]= nums[i];
            current_index +=1;
        }
    }
    return current_index;
}

let nums =[1, 1, 1, 2, 3, 3, 4, 4];
let ans=remove_duplicate(nums);
console.log(ans);