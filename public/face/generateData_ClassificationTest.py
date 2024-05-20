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
    person1, person2 = random.sample(list(characters.keys()), 2)
    data = {}
    images_number_A = characters[person1]
    images_index_A = random.sample(range(1, images_number_A + 1), 6)
    images_number_B = characters[person2]
    images_index_B = random.sample(range(1, images_number_B + 1), 6)
    data['A'] = {
        'id': generate_id(),
        'image': f'public/face/{person1}/{images_index_A[0]}.jpg',
        'name': person1
    }
    data['B'] = {
        'id': generate_id(),
        'image': f'public/face/{person2}/{images_index_B[0]}.jpg',
        'name': person2
    }
    test = []
    test_answer = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
    random.shuffle(test_answer)
    A_image_index = 0
    B_image_index = 0
    for i in range(len(test_answer)):
        if test_answer[i] == 1:
            test.append({
                "id": generate_id(),
                'image': f'public/face/{person1}/{images_index_A[A_image_index]}.jpg',
                'name': person1,
                'answer': 'A'
            })
            A_image_index += 1
        else:
            test.append({
                "id": generate_id(),
                'image': f'public/face/{person2}/{images_index_B[B_image_index]}.jpg',
                'name': person2,
                'answer': 'B'
            })
            B_image_index += 1
    data['test'] = test
    return data


def generate_datas(num):
    datas = []
    for i in range(num):
        datas.append(get_data())
    return datas


def main():
    global ID
    ID = 0
    data = generate_datas(1)
    json_data = json.dumps(data, ensure_ascii=False, indent=4)
    print(json_data)


if __name__ == '__main__':
    main()
