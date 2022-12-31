function halvesAreAlike(s: string): boolean {
    s = s.toLowerCase();
    let left = s.slice(0,s.length/2);
    let right = s.slice(s.length/2);   
    left = left.split('').filter((letter)=> letter == 'a'|| letter == 'e'|| letter == 'i' ||letter == 'o'||letter == 'u').join('');
    right = right.split('').filter((letter)=> letter == 'a'|| letter == 'e'|| letter == 'i' ||letter == 'o'||letter == 'u').join('');
    return left.length === right.length;
};