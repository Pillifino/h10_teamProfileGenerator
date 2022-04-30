const Engineer = require("../lib/engineer")

describe ("Engineer", () => {
    describe("getRole", () =>{
        it("Should Return Engineer", () => {
            const role = new Engineer("Dino", 1 , "DinoDizon073100@gmail.com","Pillifino")
            expect(role.getRole()).toEqual("Engineer")
        })
    })
})