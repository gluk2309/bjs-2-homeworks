/*################# Task 1 #################*/

function parseCount(parseTheValue) {
  const value = Number.parseFloat(parseTheValue);
  if (isNaN(value)) {
    throw new Error("Невалидное значение");
  } else {
    return value;
  }
}
function validateCount(parseTheValue) {
  try {
    return parseCount(parseTheValue);
  } catch (error) {
    return error;
  }
}

/*################## Task 2 ##################*/

class Triangle {
  constructor(a, b, c) {
    if (a > b + c 
      || b > a + c 
      || c > a + b) {

      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}

