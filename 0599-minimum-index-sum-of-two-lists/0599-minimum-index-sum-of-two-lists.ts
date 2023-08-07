function findRestaurant(list1: string[], list2: string[]): string[] {
    let minSum: number = list1.length + list2.length;
    let word: string[] = [];
    for(let i = 0; i < list1.length; i++) {
        if(list2.indexOf(list1[i]) !== -1) {
            const j: number = list2.indexOf(list1[i]);
            if(i+j <= minSum) {
                if(i+j === minSum) word.push(list1[i]);
                else word = [list1[i]];
                minSum = i + j;
            }
        }
    }
    return word;
};