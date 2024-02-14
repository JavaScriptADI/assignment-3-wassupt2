let number = 7;

for ( i = 1; i <= number; i++) {
    let line = " ";
    
    for ( j = 0; j < i; j++) {
        line += "#";
    }
    
    console.log(line);
}