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

function getData() {
    const characters = Math.random() < 0.5 ? femaleCharacters : maleCharacters;
    const [person1, person2] = randomSample(Object.keys(characters), 2);
    const data = {};
    const imagesNumberA = characters[person1];
    const imagesIndexA = randomSample(
        Array.from({ length: imagesNumberA }, (_, i) => i + 1),
        6,
    );

    const imagePathA = `public/face/${person1}/${imagesIndexA[0]}.jpg`;
    data[`A`] = {
        id: generateId(),
        image: imagePathA,
        name: person1,
    };

    const imagesNumberB = characters[person2];
    const imagesIndexB = randomSample(
        Array.from({ length: imagesNumberB }, (_, i) => i + 1),
        6,
    );

    const imagePathB = `public/face/${person2}/${imagesIndexB[0]}.jpg`;
    data['B'] = {
        id: generateId(),
        image: imagePathB,
        name: person2,
    };

    const test = [];
    const testAnswer = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
    shuffle(testAnswer);
    let AImageIndex = 1;
    let BImageIndex = 1;

    for (let i = 0; i < testAnswer.length; i++) {
        if (testAnswer[i] === 1) {
            test.push({
                id: generateId(),
                image: `public/face/${person1}/${imagesIndexA[AImageIndex++]}.jpg`,
                name: person1,
                answer: 'A',
            });
        } else {
            test.push({
                id: generateId(),
                image: `public/face/${person2}/${imagesIndexB[BImageIndex++]}.jpg`,
                name: person2,
                answer: 'B',
            });
        }
    }

    data['tests'] = test;
    return data;
}

function generateDatas(num) {
    const datas = [];
    for (let i = 0; i < num; i++) {
        datas.push(getData());
    }
    return datas;
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

export default getData;
