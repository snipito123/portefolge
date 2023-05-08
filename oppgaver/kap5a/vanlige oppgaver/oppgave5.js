// hent lagrede opplysninger fra informasjonskapsler eller opprett en tom variabel
let user = JSON.parse(localStorage.getItem('user')) || {};

// sett brukerens navn på nettsiden
if (user.name) {
  document.querySelector('h1').textContent = 'Velkommen tilbake, ' + user.name + '!';
}

// sett bakgrunnsfarge til brukerens favorittfarge 1
if (user.color1) {
  document.body.style.backgroundColor = user.color1;
}

// legg til en hendelse for å lagre brukerens opplysninger når skjemaet sendes inn
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // hindre at skjemaet sendes inn på vanlig måte
  
  // lagre brukerens navn og favorittfarger i brukerobjektet
  user.name = document.querySelector('#name').value;
  user.color1 = document.querySelector('#color1').value;
  user.color2 = document.querySelector('#color2').value;
  
  // lagre brukerens opplysninger i en informasjonskapsel som varer i 7 dager
  localStorage.setItem('user', JSON.stringify(user));
  
  // oppdater nettsiden med brukerens navn og favorittfarge
  document.querySelector('h1').textContent = 'Velkommen tilbake, ' + user.name + '!';
  document.body.style.backgroundColor = user.color1;
});

// legg til en knapp for å slette informasjonskapslene og brukerens opplysninger
document.querySelector('body').innerHTML += '<button id="delete-data">Slett data</button>';