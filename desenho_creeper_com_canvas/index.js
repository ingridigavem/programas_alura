
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 350, 300);

pincel.fillStyle = 'black';
pincel.fillRect(50, 55, 90, 90);
pincel.fillStyle = 'black';
pincel.fillRect(210, 55, 90, 90);

pincel.fillStyle = 'black';
pincel.fillRect(140, 145, 70, 100);

pincel.fillStyle = 'black';
pincel.fillRect(100, 190, 40, 110);

pincel.fillStyle = 'black';
pincel.fillRect(210, 190, 40, 110);
