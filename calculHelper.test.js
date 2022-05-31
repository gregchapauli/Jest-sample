import {
  afficheMessageCalculAir,
  calculAir,
  calculAirCarre,
  isAdmin,
} from "./calculHelper";

//Création d'une suite de tests pour afficheMessageCalculAir
describe("test de la fonctionnalite afficheMessageCalculAir", () => {
  //Test 1: tester un libelle avec des valeurs correctes pour calculAir
  test("tester un libelle avec des valeurs correctes pour calculAir", () => {
    expect(afficheMessageCalculAir(10, 10)).toContain("100");
  });

  //Tests 2: tester plusieurs libelles avec des valeurs incorrectes pour calculAir
  test("tester un libelle avec des valeurs incorrectes pour calculAir", () => {
    expect(afficheMessageCalculAir(10, "toto")).toContain(
      "l'air ne peut pas etre calculee"
    );
  });
  test("tester un libelle avec des valeurs tableau pour calculAir", () => {
    expect(afficheMessageCalculAir([], [])).toContain(
      "l'air ne peut pas etre calculee"
    );
  });
});

//Création d'une suite de tests pour calculAir
describe("test de la fonctionnalite calculAir", () => {
  //Tests 1: tester des valeurs correctes pour calculAir
  test("tester des valeurs correctes pour calculAir", () => {
    expect(calculAir(10, 10)).toBe(100);
  });
  test("tester des valeurs correctes pour calculAir", () => {
    expect(calculAir(10, 10)).toBeGreaterThan(0);
  });
  test("tester des valeurs correctes pour calculAir", () => {
    expect(calculAir(10, "toto")).toBeNaN();
  });
});

//Création d'une suite de tests pour calculAirCarre
describe("test de la fonctionnalite calculAirCarre", () => {
  //Tests 1: tester des valeurs correctes pour calculAirCarre
  test("tester des valeurs correctes pour calculAirCarre", () => {
    expect(calculAirCarre(10)).toBe(100);
  });
  test("tester des valeurs correctes pour calculAirCarre", () => {
    expect(calculAirCarre(10)).toBeGreaterThan(0);
  });
});

//ERROR

describe("test de la fonctionnalite isAdmin", () => {
  let userSimple = { role: "guest" };
  let userAdmin = { role: "admin" };

  test("test de isAdmin avec un user simple", () => {
    function callIsAdmin() {
      isAdmin(userSimple);
    }
    expect(callIsAdmin).toThrowError("interdit");
  });

  test("test de isAdmin avec un admin", () => {
    expect(isAdmin(userAdmin)).toBeTruthy();
  });
});

//toMatchObject

const advancedPermission = {
  domain: "mikecodeur.com",
  level: 4,
  perms: {
    roles: ["guest", "reader", "reviewer"],
    delegated: true,
    method: "oauth2",
  },
};

describe("test objet avancé permission", () => {
  const advancedUser = {
    domain: "mikecodeur.com",
    perms: {
      roles: ["guest", "reader", "reviewer"],
      delegated: true,
      method: expect.stringMatching("saml|oauth|oauth2"),
    },
  };

  test("test de permission", () => {
    expect(advancedPermission).toMatchObject(advancedUser);
  });
});

//toBeInstanceOf

class User {
  constructor(nom) {
    this.nom = nom;
  }
}

function Auth(name) {
  if (typeof name === "undefined") {
    throw new Error("le name doit etre defini");
  }
  return new User(name);
}

describe("test d'instance de class", () => {
  test("tester l'instance de User", () => {
    expect(new User()).toBeInstanceOf(User);
  });
  test("tester l'instance de User", () => {
    expect(Auth("mike")).toBeInstanceOf(User);
  });
  test("tester l'instance de User", () => {
    function callAuth() {
      Auth();
    }
    expect(callAuth).toThrowError("le name doit etre defini");
  });
});

//arrayContaining
function getRolesA() {
  return ["admin", "guest"];
}
function getRolesB() {
  return ["admin", "user"];
}

describe("test de array de roles", () => {
  const attendu = ["admin", "guest"];

  test("tester le contenu du array", () => {
    expect(getRolesA()).toEqual(expect.arrayContaining(attendu));
  });
  test("tester le contenu du array", () => {
    expect(getRolesB()).not.toEqual(expect.arrayContaining(attendu));
  });
});
