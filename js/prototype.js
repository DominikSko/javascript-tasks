 /*const Player = function(nick, email) {  // konstruktor
  this.nick = nick;
  this.email = email;
  this.shoot = () => console.log("SHOOT!!!");
};

Player.prototype.login = () => console.log("Jestem zalogowany!");
Player.prototype.logout = () => console.log("Jestem wylogowany!");
Player.prototype.moveLeft = () => console.log("Idę w lewo!");
Player.prototype.moveRight = () => console.log("Idę w prawo!");

const Player1 = new Player("Dragon", "janek@example.com");
console.log(Player1);
Player1.login();
const Player2 = new Player("Fenix", "john@example.com");
const Player3 = new Player("Kmaikadze", "tom@example.com");

let PlayerProto = {
  login: () => console.log("Jestem zalogowany!"),
  logout: () => console.log("Jestem wylogowany!")
};

// tylko prototyp
let Player4 = Object.create(PlayerProto);
Player4.nick = "AngryBird";
Player4.mail = "max@example.com";

// prototyp plus property - musimy podawać to w sposób { property: {value: "wartość property"} }
let Player5 = Object.create(PlayerProto, {
  nick: { value: 'Joker' },
  email: { value: 'andrew@example.com' }
});  */

/*
Podsumowanie
Prototypy i dziedziczenie w JavaScript to jedno z najważniejszych zagadnień obiektowego programowania. Dzisiejszy wpis na temat dziedziczenia można podsumować w kilku krótkich punktach:

każdy obiekt w JavaScript posiada property prototype, dzięki czemu możliwe jest korzystanie z dziedziczenia,
property prototype zawiera wszystkie property oraz metody, które chcemy, aby zostały odziedziczone przez wszystkie nowo tworzone instancje,
podczas wywołania metody na obiekcie, najpierw sprawdzane jest, czy metoda ta znajduje się bezpośrednio na obiekcie, jeżeli nie jest ona tam znaleziona, metoda jest szukana na prototypie obiektu. Zagłębianie się w kolejne prototypy w celu wyszukania wywołanej metody (albo property) nazywane jest prototype chain,
Object.create() jest kolejnym sposobem na tworzenie obiektów w JavaScript.
Kolejna część wpisu będzie poświęcona klasom w JavaScript – zachęcam do czytania.  */

class Person {
  constructor(name, email) {
    // property są tworzone tutaj - wewnątrz metody 'constructor'
    // są one bezpośrednio dołączone do instancji klasy
    this.name = name;
    this.email = email;
  }

  // metody są tworzone tutaj - bezpośrednio w ciele klasy
  // są one dostępne jako 'prototype'
  login() {
    //console.log(this.name, "własnie się zalogował");
  }

  logout() {
    //console.log(this.name, "własnie się wylogował");
  }
}

const Mario = new Person("Mario", "mario@example.com");
//console.log(Mario);
//console.log(Mario.name);
Mario.login()
const Luigi = new Person("Luigi", "luigi@example.com");

class Player {
  constructor(nick, email) {
    this.nick = nick;
    this.email = email;
  };

  shoot() { console.log("SHOOT!!!") }
  login() { console.log("Jestem zalogowany!") }
  logout() { console.log("Jestem wylogowany!") }
  moveLeft() { console.log("Idę w lewo!") }
  moveRight() { console.log("Idę w prawo!") }
}

const Player1 = new Player("Dragon", "janek@example.com");
const Player2 = new Player("Fenix", "john@example.com");
const Player3 = new Player("Kmaikadze", "tom@example.com");

Player1.shoot(); // "SHOOT!!!"

class Leader extends Player {
  constructor(nick, email, team) {
    super(nick, email);     // pozwala na użycie property z klasy 'Player'
    this.team = team;       // nowa property tylko dla klasy 'Leader'
  };
  jump() { console.log("Mogę skakać!") }
  invite(nick) { console.log(nick, ", zapraszam Cię do mojego zespołu")}
}

const Player99 = new Leader("Snake", "frank@example.com", "team-red");

Player99.moveLeft(); // Idę w lewo!
Player99.jump(); // Mogę skakać!
//console.log(Player99.team) // team-red
Player99.invite("Dragon"); // Dragon , zapraszam Cię do mojego zespołu

//Player3.jump(); // ERROR!
