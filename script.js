/* Biblan*/

/* let book = {
  title: "It",
  author: "STeven King",
  numPages: "500",
};

let myBooks = [
  { title: "the shining", author: "STeven King", numPages: "500" },
  { title: "It", author: "STeven King", numPages: "500" },
  { title: "carrie", author: "STeven King", numPages: "500" },
  { title: "returnal", author: "STeven King", numPages: "500" },
];

function findTitle(myBooks, title) {
  for (obj of myBooks) {
    if (title == obj.title) console.log(obj.title);
  }
}

console.log(findTitle(myBooks, "the shining")); */

/* Letter Frequqncy"*/

/* myString = "abbcddd";

function calcSymbols(s) {
  let myObject = {};

  let stringArray = s.split("");

  stringArray.forEach((letter) => {
    if (myObject[letter]) {
      myObject[letter] += 1;
    
    
    } else {
      myObject[letter] = 1;
    }
  });
  console.log(myObject)
}

calcSymbols(myString); */

/* ----User <register----*/

/* function countryCode(u, n) {
  let unat = [];
  for (o of u) {
    if (n === o.nat) {
      unat.push(o);
      
      
    }
  }
  console.log(unat)
}

countryCode(users, "GB"); */

/* function listEmails(list) {
  let emails = [];
  for (u of list) {
    emails.push(u.email);
  }

  return emails;
}

let myMails = listEmails(users);

console.log(myMails); */

function changeMail(u) {
  u.forEach((element) => {
    let splitArray = element.email.split("@");
    let name = splitArray[0];

    let nameArray = name.split(".");
    nameArray.reverse();

    let newname = nameArray.toString();

    newname = newname.replace(",", ".");

    nationality = element.nat;
    nationality = nationality.toLowerCase();

    newname = newname + "@evilcorp." + nationality;

    Object.defineProperty(element, "email", { value: newname });

    console.log("newmail" + element.email);
  });

  return u;
}

changeMail(users);

console.log(users);
