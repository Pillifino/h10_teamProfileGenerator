const Intern = require("../lib/intern")

describe ("Intern", () => {
    describe("getRole", () =>{
        it("Should Return Intern", () => {
            const role = new Intern("Dino", 1 , "DinoDizon073100@gmail.com","UW")
            expect(role.getRole()).toEqual("Intern")
        })
    })
})