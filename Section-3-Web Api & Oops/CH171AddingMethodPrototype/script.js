function Rectangle(name,width,length)
{
    this.name = name;
    this.width = width;
    this.length = length;
}

Rectangle.prototype.area = function () {
    return this.width*this.length;
}

const rect1 = new Rectangle('rect1',100,200);
console.log(rect1)
console.log(rect1.area())