import { Calculator } from '../src/maths.ts';
import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { expect } from "https://deno.land/x/expect/expect.ts";

Deno.test('addition  of two numbers', ()=> {
  const newCalculator = new Calculator(),
  result  = newCalculator.add(10, 5);

  if( result != 15){
    throw new Error(`${result} is not equal to 5`);
  }
});

Deno.test('Given two numbers', ()=> {
  const newCalculator = new Calculator(),
  addition = newCalculator.add(3,4),
  substraction = newCalculator.subtract(4, 6)

  assertEquals(addition, 7);
  assertEquals(substraction, -2)
});

Deno.test('An error is thrown if the value is less than 10', ()=> {
  const newCalculator = new Calculator(),
  err = assertThrows(()=> {
    newCalculator.throwError(7)
  })
  assertEquals(err.message, '7 has to be greater than 10')
});

Deno.test('Testing async fucntions', async ()=> {
  const newCalculator = new Calculator();
  const result = await newCalculator.asyncAdd(9, 2);
  assertEquals(result, 11)
});

Deno.test('Using the expect library', ()=> {
  const listOfNumber: number[] = [1, 3, 5, 6];
  const name = 'chris';
  expect(listOfNumber).toContain(6);
  expect(listOfNumber).toHaveLength(4);
  expect(name).toBe('chris')
});