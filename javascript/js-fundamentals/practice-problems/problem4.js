// Merge arrays without duplicates
function merge(arr1,arr2){
    let st = new Set();
    for(let num in arr1){
        st.add(arr1[num]);
    }
    for(let num in arr2){
        st.add(arr2[num]);
    }
    return Array.from(st);

} 

console.log(merge([1,2,3,4],[3,4,5,6]));