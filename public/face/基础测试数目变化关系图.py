def calculate_test_cases2(x, y):
    photo_count = [y] * x
    N = 0

    while True:
        candidates_A = [i for i in range(x) if photo_count[i] >= 3]
        if not candidates_A:
            break

        generated_in_this_round = False

        for A in candidates_A:
            candidates_B = [i for i in range(x) if i != A and photo_count[i] >= 1]
            if not candidates_B:
                continue

            B = candidates_B[0]
            N += 1
            generated_in_this_round = True
            photo_count[A] -= 3
            photo_count[B] -= 1

            if photo_count[A] < 3 and A in candidates_A:
                candidates_A.remove(A)
            if photo_count[B] < 1 and B in candidates_B:
                candidates_B.remove(B)

            if not candidates_A or not candidates_B:
                break

        if not generated_in_this_round:
            break

    return N


import numpy as np
import matplotlib.pyplot as plt

# 设置支持中文的字体
plt.rcParams['font.sans-serif'] = ['SimHei']  # 替换为你系统支持的字体
plt.rcParams['axes.unicode_minus'] = False


def my_test():
    def calculate_test_cases(x, y):
        photo_count = [y] * x
        N = 0

        while True:
            candidates_A = [i for i in range(x) if photo_count[i] >= 3]
            if not candidates_A:
                break

            generated_in_this_round = False

            for A in candidates_A:
                candidates_B = [i for i in range(x) if i != A and photo_count[i] >= 1]
                if not candidates_B:
                    continue

                for B in candidates_B:
                    N += 1
                    generated_in_this_round = True
                    photo_count[A] -= 3
                    photo_count[B] -= 1

                    if photo_count[A] < 3 and A in candidates_A:
                        candidates_A.remove(A)
                    if photo_count[B] < 1 and B in candidates_B:
                        candidates_B.remove(B)

                    if not candidates_A or not candidates_B:
                        break

                if not candidates_A or not candidates_B:
                    break

            if not generated_in_this_round:
                break

        return N

    # 设置x和y的范围
    x_values = np.arange(5, 101, 1)
    y_values = np.arange(100, 501, 50)

    # 创建一个二维数组来存储结果
    results = np.zeros((len(x_values), len(y_values)))

    # 计算每个(x, y)组合的测试题数量
    for i, x in enumerate(x_values):
        for j, y in enumerate(y_values):
            results[i, j] = calculate_test_cases2(x, y)

    # 绘制图表
    plt.figure(figsize=(12, 8))
    for i, y in enumerate(y_values):
        plt.plot(x_values, results[:, i], label=f'平均照片数量: {y}')

    plt.xlabel('人物数量', fontsize=14)
    plt.ylabel('生成的测试题数量', fontsize=14)
    plt.title('生成测试题数量与人物数量和平均照片数量的关系', fontsize=16)
    plt.legend(title='平均照片数量', fontsize=12)
    plt.grid(True)

    plt.show()


def my_test2():
    import numpy as np
    import matplotlib.pyplot as plt
    # 设置支持中文的字体
    plt.rcParams['font.sans-serif'] = ['SimHei']  # 替换为你系统支持的字体
    plt.rcParams['axes.unicode_minus'] = False

    # 设置x和y的范围
    temp = 40
    x_values = np.arange(10, 20, 1)
    y_values = np.arange(temp, temp + 1, 1)

    # 创建一个二维数组来存储结果
    results = np.zeros((len(x_values), len(y_values)))

    # 计算每个(x, y)组合的测试题数量
    for i, x in enumerate(x_values):
        for j, y in enumerate(y_values):
            results[i, j] = calculate_test_cases2(x, y)

    # 绘制图表
    plt.figure(figsize=(12, 8))
    for i, y in enumerate(y_values):
        plt.plot(x_values, results[:, i], label=f'平均照片数量: {y}')

    plt.xlabel('人物数量', fontsize=14)
    plt.ylabel('生成的测试题数量', fontsize=14)
    plt.title('生成测试题数量与人物数量和平均照片数量的关系', fontsize=16)
    plt.legend(title='平均照片数量', fontsize=12)
    plt.grid(True)

    plt.show()


def my_test3():
    from mpl_toolkits.mplot3d import Axes3D

    def calculate_test_cases2(x, y):
        photo_count = [y] * x
        N = 0

        while True:
            candidates_A = [i for i in range(x) if photo_count[i] >= 3]
            if not candidates_A:
                break

            generated_in_this_round = False

            for A in candidates_A:
                candidates_B = [i for i in range(x) if i != A and photo_count[i] >= 1]
                if not candidates_B:
                    continue

                B = candidates_B[0]
                N += 1
                generated_in_this_round = True
                photo_count[A] -= 3
                photo_count[B] -= 1

                if photo_count[A] < 3 and A in candidates_A:
                    candidates_A.remove(A)
                if photo_count[B] < 1 and B in candidates_B:
                    candidates_B.remove(B)

                if not candidates_A or not candidates_B:
                    break

            if not generated_in_this_round:
                break

        return N

    # 设置x和y的范围
    x_values = np.arange(5, 101, 5)
    y_values = np.arange(100, 501, 50)

    # 创建一个二维数组来存储结果
    results = np.zeros((len(x_values), len(y_values)))

    # 计算每个(x, y)组合的测试题数量
    for i, x in enumerate(x_values):
        for j, y in enumerate(y_values):
            results[i, j] = calculate_test_cases2(x, y)

    # 绘制三维图
    fig = plt.figure(figsize=(12, 8))
    ax = fig.add_subplot(111, projection='3d')

    X, Y = np.meshgrid(x_values, y_values)
    Z = results.T

    ax.plot_surface(X, Y, Z, cmap='viridis')

    ax.set_xlabel('人物数量')
    ax.set_ylabel('平均照片数量')
    ax.set_zlabel('生成的测试题数量')
    ax.set_title('生成测试题数量与人物数量和平均照片数量的关系')

    plt.show()


def fuzengzhang():
    def calculate_test_cases_debug(x, y):
        photo_count = [y] * x
        N = 0
        round_details = []

        while True:
            candidates_A = [i for i in range(x) if photo_count[i] >= 3]
            if not candidates_A:
                break

            generated_in_this_round = False

            for A in candidates_A:
                candidates_B = [i for i in range(x) if i != A and photo_count[i] >= 1]
                if not candidates_B:
                    continue

                B = candidates_B[0]
                N += 1
                generated_in_this_round = True
                photo_count[A] -= 3
                photo_count[B] -= 1

                # 记录每轮的照片分布情况
                round_details.append((N, list(photo_count)))

                if photo_count[A] < 3 and A in candidates_A:
                    candidates_A.remove(A)
                if photo_count[B] < 1 and B in candidates_B:
                    candidates_B.remove(B)
                if not candidates_A or not candidates_B:
                    break

                if not candidates_A or not candidates_B:
                    break

            if not generated_in_this_round:
                break

        return N, round_details

    # 示例调用调试函数
    x = 80
    y = 300
    test_cases, details = calculate_test_cases_debug(x, y)

    for round_number, (N, photo_count) in enumerate(details):
        print(f"Round {round_number + 1}: Test cases generated = {N}, Photo count = {photo_count}")


# 定义计算总题数的函数
def calculate_total_tests(x, y):
    return (x * (x - 1) * y ** 2 * (y - 1) * (y - 2)) / 6


def calculate_test_cases(x, y):
    # 初始化每个人物的照片数量
    photo_count = [y] * x

    # 初始化可生成的测试题数
    N = 0

    while True:
        # 找到至少有三张照片的所有人物
        candidates_A = [i for i in range(x) if photo_count[i] >= 3]
        if not candidates_A:
            break

        generated_in_this_round = False

        for A in candidates_A:
            # 找到至少有一张照片的所有其他人物
            candidates_B = [i for i in range(x) if i != A and photo_count[i] >= 1]
            if not candidates_B:
                continue

            for B in candidates_B:
                # 如果找到A和B，生成一个测试题
                N += 1
                generated_in_this_round = True
                # 更新照片数量
                photo_count[A] -= 3
                photo_count[B] -= 1

                # 检查是否需要移除候选列表
                if photo_count[A] < 3 and A in candidates_A:
                    candidates_A.remove(A)
                if photo_count[B] < 1 and B in candidates_B:
                    candidates_B.remove(B)

                if not candidates_A or not candidates_B:
                    break

            if not candidates_A or not candidates_B:
                break

        # 如果本轮没有生成新的测试题，跳出循环
        if not generated_in_this_round:
            break

    return N


def main():
    print(calculate_total_tests(20, 100))
    # 示例使用
    x = 20  # 假设有100个人
    y = 100  # 每个人有100张照片
    result = calculate_test_cases2(x, y)
    print(result)


def my_test4():
    def calculate_test_cases2(x, y):
        photo_count = [y] * x
        N = 0

        while True:
            candidates_A = [i for i in range(x) if photo_count[i] >= 3]
            if not candidates_A:
                break

            generated_in_this_round = False

            for A in candidates_A:
                candidates_B = [i for i in range(x) if i != A and photo_count[i] >= 1]
                if not candidates_B:
                    continue

                B = candidates_B[0]
                N += 1
                generated_in_this_round = True
                photo_count[A] -= 3
                photo_count[B] -= 1

                if photo_count[A] < 3 and A in candidates_A:
                    candidates_A.remove(A)
                if photo_count[B] < 1 and B in candidates_B:
                    candidates_B.remove(B)

                if not candidates_A or not candidates_B:
                    break

            if not generated_in_this_round:
                break

        return N

    # 设置x和y的范围
    x_values = np.arange(5, 101, 5)
    y_values = np.arange(100, 501, 50)

    # 创建一个二维数组来存储结果
    results = np.zeros((len(x_values), len(y_values)))

    # 计算每个(x, y)组合的测试题数量
    for i, x in enumerate(x_values):
        for j, y in enumerate(y_values):
            results[i, j] = calculate_test_cases2(x, y)

    # 绘制用颜色表示大小的二维图
    plt.figure(figsize=(12, 8))
    plt.imshow(results, extent=[x_values.min(), x_values.max(), y_values.min(), y_values.max()], origin='lower',
               aspect='auto', cmap='viridis')
    plt.colorbar(label='生成的测试题数量')
    plt.xlabel('人物数量')
    plt.ylabel('平均照片数量')
    plt.title('生成测试题数量与人物数量和平均照片数量的关系')

    plt.show()


def my_test5():

    # Example data
    normal_length_errors = np.random.normal(0.05, 0.02, 100)
    normal_width_errors = np.random.normal(0.04, 0.015, 100)
    abnormal_length_errors = np.random.normal(0.08, 0.03, 30)
    abnormal_width_errors = np.random.normal(0.1, 0.04, 30)

    # Define error threshold
    threshold = 0.1

    # Create the histogram
    plt.hist(normal_length_errors, bins=20, alpha=0.5, label='正常芯片长度误差 %', color='green')
    plt.hist(normal_width_errors, bins=20, alpha=0.5, label='正常芯片宽度误差 %', color='blue')
    plt.hist(abnormal_length_errors, bins=20, alpha=0.5, label='异常芯片长度误差 %', color='brown')
    plt.hist(abnormal_width_errors, bins=20, alpha=0.5, label='异常芯片宽度误差 %', color='orange')

    # Add the threshold line
    plt.axvline(threshold, color='black', linestyle='dashed', linewidth=1, label='10% 错误阈值')

    # Add labels and title in Chinese
    plt.xlabel('误差百分比')
    plt.ylabel('频率')
    plt.title('芯片检测误差分布')

    # Add legend in Chinese
    plt.legend(loc='upper right')

    # Show plot
    plt.show()
def my_test6():

    # Example data for detection time
    detection_times = np.random.normal(0.08, 0.02, 100)

    # Create the histogram
    n, bins, patches = plt.hist(detection_times, bins=20, alpha=0.7, color='skyblue', edgecolor='black')

    # Add numbers on top of the bars
    for i in range(len(patches)):
        plt.text(patches[i].get_x() + patches[i].get_width() / 2, patches[i].get_height(),
                 str(int(patches[i].get_height())),
                 ha='center', va='bottom')

    # Add labels and title in Chinese
    plt.xlabel('检测时间 (秒)')
    plt.ylabel('频率')
    plt.title('芯片检测时间分布')

    # Show plot
    plt.show()


if __name__ == '__main__':
    # main()
    # my_test()
    # fuzengzhang()
    # my_test2()
    # my_test3()
    # my_test4()
    # my_test5()
    my_test6()
