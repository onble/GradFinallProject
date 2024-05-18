const femaleCharacters = {
    Angelagbaby: 8,
    迪丽热巴: 36,
    范冰冰: 9,
    杨幂: 46,
    赵丽颖: 9,
};

const maleCharacters = {
    李晨: 12,
    鹿晗: 16,
    郑恺: 20,
};

let ID = 0;

function generateId() {
    ID++;
    return ID.toString();
}

export function getData() {
    const characters = Math.random() < 0.5 ? femaleCharacters : maleCharacters;
    const person1 = randomChoice(Object.keys(characters));
    const data = {};
    const imagesNumber1 = characters[person1];
    const imagesIndex1 = randomSample(
        [...Array(imagesNumber1).keys()].map((i) => i + 1),
        2,
    );
    data['target'] = {
        id: generateId(),
        image: `public/face/${person1}/${imagesIndex1[0]}.jpg`,
        name: person1,
    };
    const tests = [];
    const images = [];
    for (let i = 0; i < 7; i++) {
        let newPerson = randomChoice(Object.keys(characters));
        while (newPerson === person1) {
            newPerson = randomChoice(Object.keys(characters));
        }
        let imageIndex = `public/face/${newPerson}/${randomChoice([...Array(characters[newPerson]).keys()].map((i) => i + 1))}.jpg`;
        while (images.includes(imageIndex)) {
            imageIndex = `public/face/${newPerson}/${randomChoice([...Array(characters[newPerson]).keys()].map((i) => i + 1))}.jpg`;
        }
        images.push(imageIndex);
        tests.push({
            id: generateId(),
            image: imageIndex,
            name: newPerson,
            answer: false,
        });
    }
    tests.push({
        id: generateId(),
        image: `public/face/${person1}/${imagesIndex1[1]}.jpg`,
        name: person1,
        answer: true,
    });
    shuffle(tests);
    data['tests'] = tests;
    return data;
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomSample(arr, size) {
    const result = [];
    const set = new Set();
    while (set.size < size) {
        const index = Math.floor(Math.random() * arr.length);
        if (!set.has(index)) {
            set.add(index);
            result.push(arr[index]);
        }
    }
    return result;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
