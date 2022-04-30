const Employee = require("../lib/employee")

describe ("Employee", () => {
    describe("getRole", () =>{
        it("Should Return Employee", () => {
            const role = new Employee("Dino", 1 , "DinoDizon073100@gmail.com")
            expect(role.getRole()).toEqual("Employee")
        })
    })
})