export default class Calculator {
    constructor (earthYear, planet, avgEarthYear) {
        this.earthYear = earthYear;
        this.planet = planet;
        this.avgEarthYear = avgEarthYear;
    }

    planetAge() {
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

    lifeLeft() {
        if (this.planet === "Mercury") {
            let timePast = ((this.avgEarthYear - this.earthYear) * 0.42); 
            return timePast 
        }   else if (this.planet === "Venus") {
            let timePast = ((this.avgEarthYear - this.earthYear) * 0.62)
            return timePast
        }   else if (this.planet === "Mars") {
            let timePast = ((this.avgEarthYear - this.earthYear) * 1.88)
            return timePast
        }   else if (this.planet === "Jupiter") {
            let timePast = ((this.avgEarthYear - this.earthYear) * 11.86)
            return timePast
        }   
    }

    thisAge(planet, earthYear) {
        return `On ${planet}, you are ${earthYear} years old.`;
    }

    lifeOver() {
        if (this.planet === "Mercury") {
            let timeOver = Math.abs((this.avgEarthYear-this.earthYear) * 0.42);
            return timeOver
        }

    }
}