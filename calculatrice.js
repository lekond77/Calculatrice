
const valeur = document.getElementById("screen");

// Display value
function display(values) {
  valeur.value += values;
}

// Clean value
function cleanScreen() {
  valeur.value = "";
}
//Clean last digital
function cleanLastDigit() {
  
  const val = valeur.value;
  const val2 = val.slice(0, -1);
  valeur.value = val2;
}

// Convert to percent 
function perCent() {
  
  const val = valeur.value;
  const val2 = val / 100;
  valeur.value = val2;
}
// To calcul
function calcul() {
 
  const valeurEcran = valeur.value;
  const result = eval(valeurEcran);
  valeur.value = result;
}

// Convert number to binary 
function convertToBinary() {
  let nombre = valeur.value;
  let table = [0,0,0,0,0,0,0,0];
  let index = 7;
  while((nombre%2 == 0) || (nombre%2 == 1))
  {
    table[index] = nombre%2;
    index--
    if(nombre == 1)
    {
      break;
    }
   
    nombre /=2;
    nombre = Math.trunc(nombre);
  }
  valeur.value = "";
  for(let j = 0 ; j < table.length ; j++)
  {
    valeur.value += table[j];
  }
}