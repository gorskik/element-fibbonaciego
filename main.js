function fibonacci(n) {
    
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        let next = prev + curr; 
        prev = curr;            
        curr = next;            
    }
    
    return curr; 
}

console.log(fibonacci(10)); 
console.log(fibonacci(6));  
console.log(fibonacci(15)); 
