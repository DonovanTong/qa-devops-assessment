
const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4,5]
const testArr2 = [4,2,6,324,6]

describe('shuffleArray should', () => {
    it ('return an array',  () => { 
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true);
    })
    it ('Return array of the same length', () => {
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
    })
})