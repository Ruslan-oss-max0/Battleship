let view = {
  displayMessage(msg) {
    let messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displaHit(location) {
    let cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },
  displayMiss(location) {
    let cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  },
}

let ships = [
  {
    locations: ['10', '20', '30'],
    hits: ['', '', ''],
  },
  {
    locations: ['32', '33', '34'],
    hits: ['', '', ''],
  },
  {
    locations: ['63', '64', '65'],
    hits: ['', '', 'hit'],
  }
];

