export default class Calculator {
    constructor (earthYear, planet, avgEarthYear) {
        this.earthYear = earthYear;
        this.planet = planet;
        this.avgEarthYear = avgEarthYear;
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

Calculator.prototype.lifeLeft = function() {
    if (this.planet === "Mercury") {
        let timeLeft = ((this.avgEarthYear - this.earthYear) * 0.42)   
    }   else if (this.planet === "Venus") {
        let timeLeft = ((this.avgEarthYear - this.earthYear) * 0.62)
    }   else if (this.planet === "Mars") {
        let timeLeft = ((this.avgEarthYear - this.earthYear) * 1.88)
    }   else if (this.planet === "Jupiter") {
        let timeLeft = ((this.avgEarthYear - this.earthYear) * 1186)
    }
    return timeLeft
}