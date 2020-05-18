
export class Calculator {

  add(x: number, y: number ){
    return(x + y);
  };

  subtract(x: number, y: number){
    return(x - y)
  };

  multiply(x: number, y: number){
    x * y
  };

async asyncAdd(x: number, y: number) {
    const result = await Promise.resolve(x + y)
    return result
  };

  throwError(x: number): void {
    if(x < 10){
      throw new Error(`${x} has to be greater than 10`);
    }
  };
}