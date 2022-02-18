const layout = [
  [
    { type: 'VIP', booked: false },                   //A0
    { type: 'VIP', booked: true },  //RESERVADA         A1
    { type: 'VIP', booked: true },                    //A2
    { type: 'VIP', booked: false }, //                  A3
  ],
  [
    { type: 'NORMAL', booked: false },                //B0
    { type: 'VIP', booked: true },                    //B1
    { type: 'VIP', booked: false },                   //B2
    { type: 'NORMAL', booked: false },                //B3
  ],
  [
    { type: 'NORMAL', booked: false },                //C0 
    { type: 'NORMAL', booked: true },                 //C1
    { type: 'NORMAL', booked: true },                 //C2
    { type: 'NORMAL', booked: false },                //C3
  ],
  [
    { type: 'ECONOMIC', booked: true },               //D0
    { type: 'NORMAL', booked: true },                 //D1
    { type: 'NORMAL', booked: true },                 //D2
    { type: 'ECONOMIC', booked: false },              //D3
  ],
  [
    { type: 'ECONOMIC', booked: false },              //E0
    { type: 'ECONOMIC', booked: true },               //E1
    { type: 'ECONOMIC', booked: false },              //E2
    { type: 'ECONOMIC', booked: false },//NO RESERVADA  E3
  ],
];      

function checkSeatStatus(arg, param) {
  if (typeof arg !== 'string')
    throw new TypeError('First parameter is not a string');
  if (typeof param !== 'number')
    throw TypeError('Second parameter is not a number');

  var NroFila = getRowNumber(arg); //  OBTENGO EL NUMERO DE LA COLUMNA A TRAVES DE LA LETRA DE LA COLUMNA
  var NroAsiento = layout[NroFila]; // NUMERO DE LA COLUMNA
  var seleccionAsiento = NroAsiento[param];

  return seleccionAsiento.booked;
}

function getRowNumber(letra) {
  return letra.charCodeAt(0) - 65;
}


function book(arg, param) {
  if (checkSeatStatus(arg,param)) {    //  SI ESTA RESERVADA
    return 'Seat in ' + arg + param + ' is already booked';
  }
  else {                             // SI ESTA LIBRE

    return 'Seat in ' + arg + param + ' successfully booked';
    
  }

 return 'Seat in ' + arg + param + ' successfully booked';

}



module.exports = {
  checkSeatStatus,
  getRowNumber,
  book
};



