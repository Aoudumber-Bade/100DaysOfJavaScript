

/**
 * Question : Write a function called checkTrinngleType that takes three parameters representing the length of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isoceles", "scalene"
 */


const checkTriangleType = (a, b, c) => {
    if(a === b && b === c) return "equitriangle";
    if (a===b || b===c || a===c) {
        return "isoceles";
    
    }
    return "scalene";
}

console.log(checkTriangleType(3,2,1));
console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,3,8));