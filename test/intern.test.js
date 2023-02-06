const Intern = require("../lib/Intern");
const intern = new Intern("Robert Clemmer","003","robert@test.com","HSC");

test("constructor returns name, id #, email, and school", () => {
  expect(intern.name).toBe("Robert Clemmer");
  expect(intern.id).toBe("003");
  expect(intern.email).toBe("robert@test.com");
  expect(intern.school).toBe("HSC");
});

test("getSchool() returns intern school", () => {
  expect(intern.getSchool()).toBe("HSC");
});

test("getRole() returns role of Intern", () => {
  expect(intern.getRole()).toBe("Intern");
});