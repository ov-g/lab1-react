// 1. Variabile și Tipuri de date
// 1.1 Declarați trei variabile utilizând var, let, și const. Atribuiți-le valori de tip number, string și boolean.
// 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând typeof.
// 1.3 Convertiți o valoare de tip string în number și invers. Exemplu: "123" → 123 și 456 → "456".
// 1.4 Declarați două variabile (nume, varsta) și creați o propoziție utilizând șabloane de string-uri (template literals - ``).
// 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
// 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip null sau undefined.
// 1.7 Creați un obiect cu mai multe proprietăți (string, number, boolean). Adăugați și eliminați dinamic o proprietate la obiect.
// 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.

// 1.1
var numberVariable = 2;
let stringVariable = 'String';
const booleanVariable = true; 

console.log(numberVariable, stringVariable, booleanVariable);

// 1.2
function findVariableType(variable) {
    return typeof variable;
}

console.log(findVariableType(7));

// 1.3
let stringValue = "123";
let numberValue = Number(stringValue);
console.log(typeof stringValue, typeof numberValue)

let num = 456;
let str = String(num);
console.log(typeof num, typeof str);

// 1.4
const nume = 'Otilia';
const varsta = 26;

console.log(`${nume} are ${varsta} ani.`);

// 1.5 
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

let c = 3;
let d = 4;
let e;

e = c;
c = d;
d = e;

console.log(c, d);

// 1.6
function checkForNullOrUndefinedType(variable) {
    return variable === null || variable === undefined;
}

console.log(checkForNullOrUndefinedType(null));
console.log(checkForNullOrUndefinedType(8));

// 1.7
let student = {
    nume: "Ana Ciobanu",
    varsta: "20",
    studiiBuget: false
}

student.facultate = "FMI";
delete student.studiiBuget;

console.log(student);

// 1.8 
let arr = [1, 'doi', false, undefined, {ordine: 5}];

arr.forEach(element => {
    console.log(typeof element);
});


// 2. Funcții
// 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.
// 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
// 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
// 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
// 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
// 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array.

// 2.1 
function sumCalculator(a, b) {
    return a + b;
}

console.log(sumCalculator(3, 4));

// 2.2 
function rectangleAriaCalculator(width, height = 1) {
    return width * height;
}

console.log(rectangleAriaCalculator(3, 4));
console.log(rectangleAriaCalculator(3));

// 2.3
const patrat = function(latura) {
    return latura * latura;
};

console.log(patrat(3));

// 2.4
function stringManipulation(stringValue) {
    let upperCaseString = stringValue.toUpperCase();
    return upperCaseString.length;
}

console.log(stringManipulation("mama"));

// 2.5
function calculareDublu(numar) {
    return numar * 2;
};

function calcularePatrat(numar) {
    return numar * numar;
};

function manipulareNumar(numar) {
    return {
        dublulNumarului: calculareDublu(numar),
        patratulNumarului: calcularePatrat(numar)
    }
};

console.log(manipulareNumar(7));

// 2.6 
const calculateSumUsingArrowFunction = (a, b) => a + b;

console.log(calculateSumUsingArrowFunction(5, 6));

// 2.7
const ridicareLaPatrat = (element) => element * element;

function manipulareElementeArray(array, functie) {
    return array.map(functie);
}

console.log(manipulareElementeArray([1, 2, 3, 4, 5], ridicareLaPatrat));


// 3. Obiecte
// 3.1 Declarați un obiect masina cu următoarele proprietăți: marca, model, și an. Atribuiți valori pentru fiecare proprietate.
// 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
// 3.3 Adăugați o proprietate nouă, culoare, și actualizați proprietatea an cu o valoare diferită.
// 3.4 Ștergeți proprietatea model din obiect.
// 3.5 Folosiți for...in pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
// 3.6 Adăugați o metodă descriere în obiectul masina care să returneze un string cu toate informațiile despre mașină.
// 3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
// 3.8 Verificați dacă obiectul masina conține o proprietate culoare utilizând operatorul in.
// 3.9 Declarați un obiect casa care să conțină un alt obiect adresa cu proprietăți precum strada și oras.
// 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect student cu proprietățile nume, varsta și nota.
// 3.11 Folosiți Object.assign și operatorul spread (...) pentru a clona obiectul masina în alte obiecte.
// 3.12 Creați un obiect calculator cu metode pentru adunare, scădere, înmulțire și împărțire.
// 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect. 


// 3.1
let masina = {
    marca: 'volkswagen',
    model: 'jetta',
    an: 2016
};

console.log(masina);

// 3.2
console.log(masina["marca"], masina.model);

// 3.3 
masina.culoare = 'albastru';
masina.an = 2020;

console.log(masina);

// 3.4
delete masina.model;

console.log(masina);

// 3.5
for (cheie in masina) {
    console.log(`${cheie}: ${masina[cheie]}`);
}; 

// 3.6
masina.descriere = function() {
    return `Masina ${masina.marca} din anul ${masina.an} are culoarea ${masina.culoare}.`
}

console.log(masina.descriere());

// 3.7 
function mesajPersonalizat(persoana) {
    return `Buna ziua, ${persoana.nume}, magazinul nostru online va felicita cu aniversarea de ${persoana.varsta} de ani si va ofera 200 puncte bonus.`;
}

console.log(mesajPersonalizat({nume: "Andreea", varsta: 30}));

// 3.8
console.log("culoare" in masina);

// 3.9
let casa = {
    tip: "constructie noua",
    adresa:
    {
        strada: "Alexei Mateevici",
        oras: "Chisinau"
    }
}

console.log(casa);

// 3.10 
function creareStudent(nume, varsta, nota) {
    return {nume, varsta, nota}
}

console.log(creareStudent("Maria", 23, 9));

// 3.11
let clonaNrUnu = Object.assign({}, masina);
let clonaNrDoi = {...masina};

console.log(clonaNrUnu);
console.log(clonaNrDoi);

// 3.12
let calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => b !== 0 ? a / b : "Impartirea la 0 nu se admite"
}; 

console.log(calculator.adunare(2, 3));
console.log(calculator.scadere(3, 4));
console.log(calculator.inmultire(4, 5));
console.log(calculator.impartire(5, 6));

// 3.13 
let {marca, culoare, an} = masina;
console.log(marca, culoare, an); 


// 4. Array-uri
// 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
// 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
// 4.3 Folosiți un for pentru a itera printr-un array de culori și afișați fiecare element.
// 4.4 Folosiți metoda forEach pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
// 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de 10.
// 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
// 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția map.
// 4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.
// 4.9 Verificați dacă un anumit element există într-un array folosind includes și indexOf.
// 4.10 Combinați două array-uri de cuvinte într-unul singur folosind concat sau operatorul spread (...).
// 4.11 Declarați un array bidimensional pentru o matrice 2x2 și accesați elementul de pe linia 1, coloana 2.
// 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
// 4.13 Folosiți slice pentru a crea un sub-array și splice pentru a elimina elementul cu indexul 2.

// 4.1 
let orase = ["Cluj", "Bucuresti", "Iasi"];
console.log("4.1:", orase[0], orase[orase.length - 1]); 

// 4.2 
orase.push("Timisoara");
orase.unshift("Constanta");
orase.pop();
console.log("4.2:", orase); 

// 4.3
let culori = ["rosu", "verde", "albastru"];
console.log("4.3:");
for (let i = 0; i < culori.length; i++) {
  console.log(culori[i]);
} 

// 4.4 
let animale = ["pisica", "caine", "cal"];
console.log("4.4:");
animale.forEach(animal => {
  console.log(`Imi place ${animal}`);
}); 

// 4.5
function filtreazaNumere(array) {
    return array.filter(num => num > 10);
  }
  console.log("4.5:", filtreazaNumere([5, 12, 8, 21, 3]));

// 4.6
let numere = [23, 1, 15, 4, 9];
numere.sort((a, b) => a - b);
console.log("4.6:", numere);

// 4.7 
let lista = [2, 4, 6];
let patrate = lista.map(x => x * x);
console.log("4.7:", patrate);

// 4.8
let suma = lista.reduce((acc, val) => acc + val, 0);
console.log("4.8:", suma);

// 4.9
let fructe = ["mar", "banana", "portocala"];
console.log("4.9:", fructe.includes("banana"), fructe.indexOf("banana")); 

// 4.10
let a1 = ["salut", "ce"];
let a2 = ["faci", "acolo"];
let comb1 = a1.concat(a2);
let comb2 = [...a1, ...a2];
console.log("4.10:", comb1, comb2);

// 4.11
let matrice = [
    [1, 2],
    [3, 4]
];
console.log("4.11:", matrice[0][1]); 

// 4.12
function eliminaDuplicate(array) {
    return [...new Set(array)];
}
console.log("4.12:", eliminaDuplicate([1, 2, 2, 3, 4, 4, 5]));

// 4.13 
let culori2 = ["rosu", "verde", "albastru", "galben"];
let subArray = culori2.slice(1, 3);
culori2.splice(2, 1);
console.log("4.13 slice:", subArray);
console.log("4.13 splice:", culori2);




