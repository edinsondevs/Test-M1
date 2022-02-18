const { checkSeatStatus, getRowNumber, book } = require('../homework');

describe('getSeatStatus', () => {
  //  TEST ONE
  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

  //  TEST TWO
  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(7)).toThrow(new TypeError('First parameter is not a string')
    );
  });

  //  TEST THREE
  it('Second parameter is not a number', () => {
    expect(() => checkSeatStatus('2', 'e').toThrow(new TypeError('Second parameter is not a number')))
  }
  );

  //  TEST FOUR
  it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });

  it('should return 1 if the letter given is an C', () => {
    expect(getRowNumber('C')).toBe(2);
  });
});


  //  TEST FIVE
describe('getRowNumber', () => {
  it('should return true if the seat is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });

  it('should return false if the seat is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  });
});
  
//  TEST SIX
describe('book', () => {
  it('Seat in XX successfully booked NO RESERVADA', () => {
    expect(book('E', 3)).toBe('Seat in E3 successfully booked');
  });

  it('Seat in XX is already booked RESERVADA', () => {
    expect(book('A', 1)).toBe('Seat in A1 is already booked');
  });
});

  it('Seat in XX is already booked NO RESERVADA', () => {
    expect(book('A', 3)).toBe(false);
    expect(book('A', 1)).toBe('Seat in E3 is successfully booked');
    //expect(book('A', 3)).toBe(true);
  });
