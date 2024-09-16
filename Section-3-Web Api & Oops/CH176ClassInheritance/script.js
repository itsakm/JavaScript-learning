class Shape{
    constructor(name)
    {
        this.name = name;
    }

    logName()
    {
        console.log(this.name);
    }
}

class Rectangle extends Shape{
    constructor(name,width,height){
        super(name);
        this.width = width;
        this.height = height;
    }
}

const rect1 = new Rectangle('Rect1',20,30);
console.log(rect1)
rect1.logName();