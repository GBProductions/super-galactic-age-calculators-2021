export default class Calculator {
    constructor (earthYear, planet) {
        this.earthYear = earthYear;
        this.planet = planet;
    }
}

Calculator.prototype.planetAge = function() {
    if (this.planet === "Mercury") {
        return (this.earthYear * 0.42) 
    }   else if (this.planet === "Venus") {
        return (this.earthYear * 0.62)
    }   else if (this.planet === "Mars") {
        return (this.earthYear * 1.88)
    }   else if (this.planet === "Jupiter") {
        return (this.earthYear * 11.86)
    }
}