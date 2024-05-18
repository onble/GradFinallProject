import json
import random

female_characters = {
    "Angelagbaby": 8,
    "迪丽热巴": 36,
    "范冰冰": 9,
    "杨幂": 46,
    "赵丽颖": 9,
}
male_characters = {
    "李晨": 12,
    "鹿晗": 16,
    "郑恺": 20,
}

ID = 0


def generate_id():
    global ID
    ID += 1
    return str(ID)


def get_data():
    global ID
    characters = random.choice([female_characters, male_characters])
    person1 = random.choice(list(characters.keys()))
    data = {}
    images_number_1 = characters[person1]
    images_index_1 = random.sample(range(1, images_number_1 + 1), 2)
    data['target'] = {
        'id': generate_id(),
        'image': f'public/face/{person1}/{images_index_1[0]}.jpg',
        'name': person1
    }
    tests = []
    images = []
    for i in range(9):
        # 随机抽一个新的人物
        new_person = random.choice(list(characters.keys()))
        while (new_person == person1):
            new_person = random.choice(list(characters.keys()))
        # 生成图片地址
        image_index = f'public/face/{new_person}/{random.choice(range(1, characters[new_person] + 1))}.jpg'
        if (image_index in images):
            while (image_index in images):
                image_index = f'public/face/{new_person}/{random.choice(range(1, characters[new_person] + 1))}.jpg'
        # 存储新生成的数据
        images.append(image_index)
        tests.append({
            "id": generate_id(),
            'image': image_index,
            'name': new_person,
            'answer': False
        })
    tests.append({
        "id": generate_id(),
        'image': f'public/face/{person1}/{images_index_1[1]}.jpg',
        'name': person1,
        'answer': True
    })
    # 打乱数组
    random.shuffle(tests)
    data['tests'] = tests

    return data


def main():
    global ID
    ID = 0
    data = get_data()
    json_data = json.dumps(data, ensure_ascii=False, indent=4)
    print(json_data)


if __name__ == '__main__':
    main()
