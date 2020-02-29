function greet(person) {
  if (person == { name: "amy" }) {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
greet({ name: "amy" });

// because those objects, {name: "amy"} refer to different memory address.

function greet(person) {
  if (person.name == "amy" ) {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
console.log(greet({ name: "amy" }));
