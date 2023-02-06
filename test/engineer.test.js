const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Robert Clemmer","002","robert@test.com","rjclemmer");

test("constructor returns name, id #, email, and github name", () => {
  expect(engineer.name).toBe("Robert Clemmer");
  expect(engineer.id).toBe("002");
  expect(engineer.email).toBe("robert@test.com");
  expect(engineer.github).toBe("rjclemmer");
});

test("getGithub() returns Engineer github", () => {
  expect(engineer.getGithub()).toBe("rjclemmer");
});

test("getRole() returns role of Engineer", () => {
  expect(engineer.getRole()).toBe("Engineer");
});