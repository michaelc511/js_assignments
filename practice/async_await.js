// makeRequest returns a promise w resolve and reject w async and await

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log('1 Making req to', location);
    if (location === 'Google') {
      resolve('1r Google says hi');
    }
    else {
      reject('1e We can only talk to Google');
    }
  })
}

// processRequest - adds a resolve

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('2 Processing response');
    resolve('2r Extra info', response);
  })
}

// create a doWork function to handle it
async function doWork(goto) {
  try {
    const response = await makeRequest(goto);
    console.log('1 - Res resolved:', response);

    const processedReponse = await processRequest(response);
    console.log('2 - Process: ', processedReponse);
  } catch (error) {
    console.log('3 - Error:', error);
  }
}

doWork('Google');