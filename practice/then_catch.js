// makeRequest returns a promise w resolve and reject with .then() and .catch()

function makeRequest(location){
  return new Promise((resolve, reject)=>{
    console.log('1 Making req to', location);
    if(location === 'Google'){
      resolve('1r Google says hi');
    }
    else {
      reject('1e We can only talk to Google');
    }
  })
}

// processRequest - adds a resolve

function processRequest(response){
  return new Promise((resolve, reject) => {
    console.log('2 Processing response');
    resolve('2r Extra info', response);
  } )
}

// use .then and .catch with success
// makeRequest('Google') // change to 'Facebook' for error
// .then((response)=> {
//   console.log('1 - Response recieved', response);

// })
// .catch((error)=> {
//   console.log(error);
// })

// use .then and .catch and processRequest
makeRequest('Google') // change to 'Facebook' for error
.then((response)=> {
  console.log('1 - Response recieved:', response);
  return processRequest(response);
})
.then((processedResponse)=>{
  console.log('2 - Process:' ,processedResponse )
})
.catch((error)=> {
  console.log('3 - Error', error);
})