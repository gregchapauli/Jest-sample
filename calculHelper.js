function calculAir(longueur, largeur) {
  return multiplication(longueur, largeur);
}

function calculAirCarre(longueur) {
  return calculAir(longueur, longueur);
}

function multiplication(a, b) {
  return a * b;
}

function afficheMessageCalculAir(a, b) {
  const air = calculAir(a, b);
  let libelle = `l'air de la surface est de ${air}`;
  if (isNaN(air) || typeof a !== "number" || typeof b !== "number") {
    libelle = `l'air ne peut pas etre calculee`;
  }
  return libelle;
}

function isAdmin(user) {
  if (user.role === "admin") {
    return true;
  } else {
    throw new Error("interdit");
  }
}

export {
  calculAir,
  calculAirCarre,
  multiplication,
  afficheMessageCalculAir,
  isAdmin,
};
