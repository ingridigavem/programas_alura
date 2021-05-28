
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0,0, 600, 400);

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(10, 200);
pincel.lineTo(300, 10);
pincel.lineTo(590, 200);
pincel.lineTo(10, 200);
pincel.fill();

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(10, 200);
pincel.lineTo(300, 390);
pincel.lineTo(590, 200);
pincel.lineTo(10, 200);
pincel.fill();

pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2* 3.14);
pincel.fill();