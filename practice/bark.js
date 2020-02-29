function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function() {
  console.log(this.name + " says woof");
};
let fido = new Dog("fido");
fido.bark();

// Because hen you want to use method, you need to use prototype like that.
