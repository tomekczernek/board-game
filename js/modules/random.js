const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArray = (min, max, count) => {
    const randomArray = [];
    let i = 0;

    do{
        randomArray.push(getRandomNumber(min, max));
        i += 1;
    }
    while(i < count);

    return randomArray;
}

export { getRandomArray };