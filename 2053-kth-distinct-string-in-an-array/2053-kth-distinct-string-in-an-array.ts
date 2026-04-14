function kthDistinct(arr: string[], k: number): string {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }

    for (let [key, value] of map) {
        if (value === 1) {
            if (k > 1) {
                k--;
            } else {
                return key;
            }
        }
    }

    return "";
};