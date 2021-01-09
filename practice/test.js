function test() {
  var ch1 = "b";
  var ch2;
  switch (ch1) {
    case "a":
      ch2 = "1";
    case "b":
      ch2 = "2";
    case "c":
      ch2 = "3";
      break;
    default:
      ch2 = "4";
  }
  console.log(ch2)
}

test();
