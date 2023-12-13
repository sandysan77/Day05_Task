class Circle{

    constructor(radius,colour){
            this.radius = 1.0;
            this.colour='red';
               
    }

getcolour(){
return `the colour is ${this.colour}`
}    

getradius(){
    return `The value of the radius is ${this.radius}`
}

getArea(){
    var value = (22/7)*(this.radius)*(this.radius);
    return value
}

getCircumference(){
    var value = 2*(22/7)*(this.radius);
    return value
}

}


var access = new Circle();

console.log(access.getcolour());
console.log(access.getradius());
console.log(access.getArea());
console.log(access.getCircumference());