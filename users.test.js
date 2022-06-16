import Users from "./user";
import axios from "axios";

jest.mock("axios");

test("doit récupérer les users de l'api", () => {
  const users = [{ name: "mike" }, { name: "mike" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});
