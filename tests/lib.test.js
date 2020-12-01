const lib = require('../lib');
const exer = require('../exercise1');

describe('absolute', () => {
  it('should return postive number if inputed positive number', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it('should return postive number if input is negative number', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it('should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('string', () => {
  it('should return name passed to it', () => {
    const result = lib.greet('Kenny');
    expect(result).toMatch(/Kenny/);
    expect(result).toContain('Kenny');
  });
});

describe('getCurrencies', () => {
  it('should return currencies', () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});

describe('getProducts', () => {
  it('Should return the product with the given ID', () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});

describe('registerUser', () => {
  it('should throw an exception if user does not exist', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach((a) => {
      expect(() => lib.registerUser(a)).toThrow('Username is required');
    });
  });

  it('should return user oject if valid username is passed', () => {
    const result = lib.registerUser('kenny');
    expect(result).toMatchObject({ username: 'kenny' });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe('fizzBuzz', () => {
  it('should throw if input is not a number', () => {
    expect(() => {
      exer.fizzBuzz('a');
    }).toThrow();
    expect(() => {
      exer.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      exer.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      exer.fizzBuzz();
    }).toThrow();
  });

  it('should return fizzBuzz if input is divisible by 3 and 5', () => {
    const result = exer.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
  it('should return Fizz if input is divisible by 3', () => {
    const result = exer.fizzBuzz(9);
    expect(result).toBe('Fizz');
  });
  it('should return Buzz if input is divisible by 5', () => {
    const result = exer.fizzBuzz(10);
    expect(result).toBe('Buzz');
  });

  it('should return number if input is number', () => {
    const result = exer.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
