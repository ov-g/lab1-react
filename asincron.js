// 7. Programare Asincronă
// 7.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
// 7.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.
// 7.3 Scrieți o funcție salut care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
// 7.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.
// 7.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
// 7.6 Scrieți o funcție asincronă care apelează fucția de la punctul 7.4 și afișează rezultatul.
// 7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.
// 7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
// 7.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.

// 7.1 Afișează un mesaj după 3 secunde
setTimeout(() => {
    console.log("7.1: Salut după 3 secunde!");
  }, 3000);
  
  // 7.2 Cronometru de la 1 la 5 (câte un număr pe secundă)
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log(`7.2: ${counter}`);
    counter++;
    if (counter > 5) clearInterval(intervalId);
  }, 1000);
  
  // 7.3 Funcție cu callback
  function salut(callback) {
    console.log("7.3: Salut!");
    callback();
  }
  salut(() => {
    console.log("7.3: Acesta este callback-ul.");
  });
  
  // 7.4 Funcție care returnează un Promise ce se rezolvă după 2 secunde
  function asteapta2Secunde() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("7.4: Promisiune rezolvată după 2 secunde!");
      }, 2000);
    });
  }
  
  // 7.5 Funcție cu succes sau eroare în funcție de parametru
  function verificaValoare(valoare) {
    return new Promise((resolve, reject) => {
      if (valoare) {
        resolve("7.5: Valoarea e adevărată!");
      } else {
        reject("7.5: Valoarea e falsă!");
      }
    });
  }
  
  // 7.6 Funcție asincronă care apelează funcția de la 7.4
  async function folosestePromisiunea() {
    const rezultat = await asteapta2Secunde();
    console.log("7.6:", rezultat);
  }
  folosestePromisiunea();
  
  // 7.7 Trei promisiuni în lanț
  function pas1() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Pas 1 complet"), 1000);
    });
  }
  
  function pas2() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Pas 2 complet"), 1000);
    });
  }
  
  function pas3() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Pas 3 complet"), 1000);
    });
  }
  
  pas1()
    .then(r1 => {
      console.log("7.7:", r1);
      return pas2();
    })
    .then(r2 => {
      console.log("7.7:", r2);
      return pas3();
    })
    .then(r3 => {
      console.log("7.7:", r3);
    });
  
  // 7.8 Fetch din API public
  // (pentru a rula asta în Node.js, instalează `node-fetch` cu `npm install node-fetch`)
  import('node-fetch').then(({ default: fetch }) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        console.log("7.8:", data);
      });
  });
  
  // 7.9 Promise.all și Promise.allSettled
  const p1 = Promise.resolve("Promisiune 1");
  const p2 = Promise.resolve("Promisiune 2");
  const p3 = Promise.reject("Promisiune 3 eșuată");
  
  Promise.all([p1, p2])
    .then(rez => {
      console.log("7.9 - all:", rez);
    });
  
  Promise.allSettled([p1, p2, p3])
    .then(rez => {
      console.log("7.9 - allSettled:", rez);
    });
  