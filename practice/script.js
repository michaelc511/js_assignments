const fn2 = (a, x, y, ...numbers ) => {
  console.log(a, x,y, ...numbers); // gets an error that 'Rest parameter must be last'
}

 fn2(5,6,3,7,8);