const rectangle = {
    name: 'rect1',
    width: 100,
    height: 200,
    area: function () {
        return this.width*this.height;
    }
};

console.log(rectangle.area())