

let bodyEl = document.querySelector("body");
/*
det som skjer æ att tabellenn ikkje bli registrert
*/
tabell += "<table>";
tabell += "<thead>";
tabell += "<tr>";
tabell += "<th>Overskrift 1</th>";
tabell += "<th>Overskrift 2</th>";
tabell += "</tr>";
tabell += "</thead>";
tabell += "<tbody>";
tabell += "<tr>";
tabell += "<td>Innhold 1</td>";
tabell += "<td>Innhold 2</td>";
tabell += "</tr>";
tabell += "</tbody>";
tabell += "</table>";

bodyEl.innerHTML += tabell;