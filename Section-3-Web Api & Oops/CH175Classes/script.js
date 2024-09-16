class Rectangle
{
    constructor(name,width,height)
    {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area()
    {
        return this.width*this.height;
    }

    perimeter()
    {
        return 2* (this.width+this.height);
    }
}

const rect1 = new Rectangle('rect1',10,20);
console.log(rect1.area())
console.log(rect1.perimeter())
console.log(rect1)