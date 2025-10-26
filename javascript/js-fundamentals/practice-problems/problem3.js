// Count Vowels in a string

function countVowels(str){
    let count=0;
    n = str.length;
    for(let i=0;i<n;i++){
        let ch = str[i].toLowerCase();
        
        if(ch == 'a' || ch=='e' || ch == 'i' || ch== 'o' || ch == 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels('Karan'));