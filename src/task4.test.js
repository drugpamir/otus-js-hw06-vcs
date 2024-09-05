import { setAge, cloneToAdmin, getFields } from "./task4";

describe("task4 functions", () => {
  let user;
  beforeEach(() => {
    user = {
      name: "John",
    };
  });

  it("setAge changes user age", () => {
    setAge(user, 30);
    expect(user.age).toBe(30);

    setAge(user, 40);
    expect(user.age).toBe(40);
  });

  it("cloneToAdmin returns an admin as user's clone", () => {
    setAge(user, 33);
    let admin = cloneToAdmin(user);

    expect(admin.age === 33 && admin.role === "admin").toBeTruthy();
  });

  it("getFields returns array of user fields", () => {
    let admin = cloneToAdmin(user);
    setAge(admin, 44);

    const [name, age, role] = getFields(admin);
    expect(admin.name).toBe(name);
    expect(admin.age).toBe(age);
    expect(admin.role).toBe(role);
  });
});
