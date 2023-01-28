let informasjonsteknologi1 = {
    spraak: ["HTML", "CSS"],
    likerFaget: false,
    timetall: 5,
    klasserom: "C14",
    antallElever: 24
  };

    informasjonsteknologi1.spraak.push("javascript");

    informasjonsteknologi1.antallElever = "7";

    delete informasjonsteknologi1.timetall;

    for (let egenskap in informasjonsteknologi1.spraak) {
         console.log(informasjonsteknologi1.spraak);
    }
   
    for (let egenskap in informasjonsteknologi1) {
        console.log([informasjonsteknologi1]);
   }
