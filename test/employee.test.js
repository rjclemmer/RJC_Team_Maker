const Employee = require('../lib/Employee');
const emp = new Employee("Robert Clemmer","001","robert@test.com");

ctest("constructor returns name, id #, and email of employee", () => {
    expect(emp.name).toBe("Robert Clemmer");
    expect(emp.id).toBe("001");
    expect(emp.email).toBe('robert@test.com');
});

test("getName() returns employee name", () => {
    expect(emp.getName()).toBe("Robert Clemmer");
});

test("getId() returns employee Id", () => {
    expect(emp.getId()).toBe("001");
});

test("getEmail) returns employee email", () => {
    expect(emp.getEmail()).toBe("robert@test.com");
});

test("getRole() returns employee role", () => {
    expect(emp.getRole()).toBe("Employee");
});