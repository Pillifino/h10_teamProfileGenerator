const Manager = require("../lib/manager")

describe ("Manager", () => {
    describe("getRole", () =>{
        it("Should Return Manager", () => {
            const role = new Manager("Dino", 1 , "DinoDizon073100@gmail.com","4")
            expect(role.getRole()).toEqual("Manager")
        })
    })
})