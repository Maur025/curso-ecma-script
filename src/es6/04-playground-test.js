const catObjectOne = {
  name: "Mr. Michi",
  food: "Pescado",
};

const catObjectTwo = {
  age: 12,
  color: "Blanco",
};

const getResponse = (objectOne = catObjectOne) => {
  let newCatObject = { ...objectOne, ...catObjectTwo };
  console.log(newCatObject);
};

getResponse();
getResponse({ name: "Bigotes", food: "Pollito" });
