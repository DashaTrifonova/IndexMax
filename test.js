describe("Ищет индекс максимального значения в массиве", function() {


     const array1 = [1, 50, 8, 2, 33];
    it(`Массив: ${array1} имеет индекс максимального значения = 2`, function() {
      assert.equal(func(array1), 2)
    });

    const array2 = [78, -560, 82, 0, 3];
    it(`Массив: ${array2} имеет индекс максимального значения = 3`, function() {
      assert.equal(func(array2), 3)
    });

    const array3 = [89, 0, -8, 22, 40];
    it(`Массив: ${array3} имеет индекс максимального значения = 1`, function() {
      assert.equal(func(array3), 1)
    });



});