function flipAndInvertImage(image: number[][]): number[][] {
    return image.map(arr => arr.map(elem => elem === 1 ? 0 : 1).reverse());
};