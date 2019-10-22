describe("Ищет индекс максимального значения в массиве", function() {


     const array1 = [1, 50, 8, 2];
    it(`Массив: ${array1} имеет индекс максимального значения = 1`, function() {
      assert.equal(func(array1), 1)
    });

    const array2 = [78, -560, 82, 0, 3];
    it(`Массив: ${array2} имеет индекс максимального значения = 2`, function() {
      assert.equal(func(array2), 2)
    });

    const array3 = [89, 0, -8, 22, 40];
    it(`Массив: ${array3} имеет индекс максимального значения = 0`, function() {
      assert.equal(func(array3), 0)
    });

    const array4 = [-8];
    it(`Массив: ${array4} имеет индекс максимального значения = 0`, function() {
      assert.equal(func(array4), 0)
    });


    const array5 = [0, 0, -1, 8];
    it(`Массив: ${array5} имеет индекс максимального значения = 3`, function() {
      assert.equal(func(array5), 3)
    });
});