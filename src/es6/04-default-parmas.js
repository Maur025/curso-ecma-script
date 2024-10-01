function newUser(name, age, country) {
  var name = name || "Mauro";
  var age = age || 25;
  var country = country || "BO";
  console.log(name, age, country);
}

newUser();
newUser("Eduardo", 26, "MX");

function newAdmin(name = "Mauro", age = 25, country = "BO") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Eduardo", 36, "PE");
