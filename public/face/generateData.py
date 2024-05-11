import json
import random

# 定义人物列表和对应图片数量的字典
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
    ID = ID + 1
    return ID


def get_data():
    characters = random.choice([female_characters, male_characters])
    # 随机选择两个不同的人
    person1, person2 = random.sample(list(characters.keys()), 2)
    ID = 1
    # 生成数据
    data = []
    images_number = characters[person1]
    images_index = random.sample(range(1, images_number), 3)
    for i in range(3):
        image_paths = f'public/face/{person1}/{images_index[i]}.jpg'
        data.append(
            {"id": generate_id(), "image": image_paths, "name": person1, "answer": False}
        )
    images_number = characters[person2]
    images_index = random.sample(range(1, images_number), 1)
    image_paths = f'public/face/{person2}/{images_index[0]}.jpg'
    data.append({"id": generate_id(), "image": image_paths, "name": person2, "answer": True})
    # 打乱数组的顺序
    random.shuffle(data)
    return data


def generate_datas(num):
    datas = []
    for i in range(num):
        datas.append(get_data())
    return datas


def my_test():
    pass


def main():
    data = generate_datas(30)
    # 将生成的数据转换为 JSON 格式字符串，并保持中文不转换成 Unicode 编码
    json_data = json.dumps(data, ensure_ascii=False, indent=4)
    print(json_data)


if __name__ == '__main__':
    main()
