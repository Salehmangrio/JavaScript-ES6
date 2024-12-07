class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    detail(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

class ElectricalCar extends Car{
    constructor(make, model, year, batteryType){
        super(make, model, year);
        this.batteryType = batteryType;
    }
    detail(){
        return `${super.detail()}, Battery Type: ${this.batteryType}`;
    }
}

const ecar= new ElectricalCar("Toyota", "Car","2024","HP");

d=ecar.detail();

console.log(d);
