import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export
class
 
MarvellousChkPipe
 
implements
 
PipeTransform
 
{
  transform(value: number, checkType: string): string {
      // Logic for checking numbers based on checkType:
      if (checkType === 'Even') {
          if (value % 2 === 0) {
              return 'it is even';
          } else {
              return 'it is not even';
          }
      } else if (checkType === 'Prime') {
          if (this.isPrime(value)) {
              return 'it is prime';
          } else {
              return 'it is not prime';
          }
      } else if (checkType === 'Perfect') {
          if (this.isPerfect(value)) {
              return 'it is perfect';
          } else {
              return 'it is not perfect';
          }
      } else {
          return 'Invalid check type';
      }
  }

  // Helper functions for prime and perfect number checks:
  isPrime(num: number): boolean {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  isPerfect(num: number): boolean {
      let sum = 0;
      for (let i = 1; i < num; i++) {
          if (num % i === 0) sum += i;
      }
      return sum === num;
  }
}