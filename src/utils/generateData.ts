const female_characters = {
    Angelagbaby: 8,
    迪丽热巴: 36,
    范冰冰: 9,
    杨幂: 46,
    赵丽颖: 9,
};

const male_characters = {
    李晨: 12,
    鹿晗: 16,
    郑恺: 20,
};

let ID = 0;

function generateId() {
    ID++;
    return ID;
}

function getData() {
    const characters =
        Math.random() < 0.5 ? female_characters : male_characters;
    const [person1, person2] = randomSample(Object.keys(characters), 2);
    const data = [];
    let imagesNumber = characters[person1];
    let imagesIndex = randomSample(
        Array.from({ length: imagesNumber }, (_, i) => i + 1),
        3,
    );
    for (let i = 0; i < 3; i++) {
        const imagePaths = `public/face/${person1}/${imagesIndex[i]}.jpg`;
        data.push({
            id: generateId(),
            image: imagePaths,
            name: person1,
            answer: false,
        });
    }
    imagesNumber = characters[person2];
    imagesIndex = randomSample(
        Array.from({ length: imagesNumber }, (_, i) => i + 1),
        1,
    );
    const imagePaths = `public/face/${person2}/${imagesIndex[0]}.jpg`;
    data.push({
        id: generateId(),
        image: imagePaths,
        name: person2,
        answer: true,
    });
    shuffle(data);
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

function main() {
    const data = generateDatas(30);
    const jsonData = JSON.stringify(data, null, 4);
    console.log(jsonData);
}

main();
export default generateDatas;
