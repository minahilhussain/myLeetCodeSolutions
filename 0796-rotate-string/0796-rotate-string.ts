function rotateString(raw: string, goal: string): boolean {
    for(let i = 0; i < raw.length; i++) {
        raw = raw.slice(1) + raw.slice(0, 1);
        if(raw === goal) return true;
    }
    return false;
};