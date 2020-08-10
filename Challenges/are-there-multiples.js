function areThereDuplicates(...args) {
    if(!args.length) return false;
    args.sort((a, b) => a > b);
    let i = 0;
    let j = 1
    while(j < args.length) {
        if(args[i] === args[j]){
            console.log(true)
        }
        i++
        j++
    }
    return false
}

areThereDuplicates(1,2,3,4,1)
areThereDuplicates('a','b','c')
