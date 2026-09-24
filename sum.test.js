import sum from './sum.js'

describe("test for sum fun", ()=>{
    test("sum of 5+5 equal 10", ()=>{
        expect(sum(5,5)).toBe(10)
    })

    test("sum of -5+-10 equal 10", ()=>{
        expect(sum(-5,-10)).toBe(-15)
    })
})
