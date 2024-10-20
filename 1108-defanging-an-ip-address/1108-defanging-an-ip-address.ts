function defangIPaddr(address: string): string {
    let res = ''
    for (let i = 0; i < address.length; i++) {
        address[i] === '.' ? res+= '[.]' : res += address[i] 
    }
    return res;
};