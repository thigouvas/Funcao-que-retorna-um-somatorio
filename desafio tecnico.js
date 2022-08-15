somar(50);
function somar(limite) {
  let multiplosDe3 = 0;
  let multiplosde5 = 0;
  for (i = 0; i < limite; i++) {
    if (i % 3 === 0 && i % 5 != 0) multiplosDe3 += i;
    if (i % 5 === 0) multiplosde5 += i;
  }
  console.log(multiplosDe3 + multiplosde5);
}
