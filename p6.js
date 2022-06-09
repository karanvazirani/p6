class Shape {  
    constructor(sides = []) {  
    this.sides = sides;  
    }    
    perimeter() {
    return (this.sides.length) ? this.sides.reduce((a, b) => a + b) : 0;
    }
    }
    class Rectangle extends Shape

    {
    constructor(length=0,width=0) {
    super([length,width,length,width]);
    this.length=length;
    this.width=width;
    }
    area()
    {
    return this.length*this.width;
    }
    }
class Triangle extends Shape 
{
    constructor(sideA=0, sideB=0, sideC=0) {
    super([sideA,sideB, sideC]);
    this.sideA= sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    }
    area()
    {
        const s = (this.sideA + this.sideB + this.sideC)/2
        return Math.sqrt (s*(s- this.sideA)*(s- this.sideB)*(s- this.sideC))
    }
}
const s = (this.sideA + this.sideB + this.sideC)/2
const area = Math.sqrt (s*(s- this.sideA)*(s- this.sideB)*(s- this.sideC))



const square(a):
    peri = 4 * a 
    area = a * a
    
    return "Square with sides " + str(a) + ", " + str(a) + " has perimeter of " + str(peri) + " and area of " + str(area)

const rectangle(a, b);
    peri = 2 * a + 2 * b
    area = a * b
    
    return "Rectangle with sides " + str(a) + ", " + str(b) + " has perimeter of " + str(peri) + " and area of " + str(area)

 triangle(a, b, c);
    peri = a + b + c

    s = peri / 2

    area = math.sqrt(s * (s - a)  * (s - b) * (s - c))

    return "Triangle with sides " + str(a) + ", " + str(b) + ", " + str(c) + " has perimeter of " + str(peri) + " and area of " + str(area)


data = [ [3, 4], [5, 5], [3, 4, 5], [10], []]

for i in data:
    print()

    if len(i) == 2:
        if i[0] == i[1];
            print(square(i[0]))
        else:
            print(rectangle(i[0], i[1]))

    else len(i) == 3:
        print(triangle(i[0], i[1], i[2]))

    else len(i) == 1:
        print("Shape with " + str(len(i)) + " side unsupported")

    else:
        print("Shape with " + str(len(i)) + " sides unsupported")





   
