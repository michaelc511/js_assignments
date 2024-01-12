// Promises 10 min video https://youtu.be/DHvZLI7Db8E?si=g9BGHtZ9MA4B4Ije

// 1 create a Promise with resolve and reject as params

let p = new Promise((resolve, reject) => {
  let a = 22;

  if(a ===2){
    resolve('Resolve');
  } else {
    reject('Reject');
  }
}
)

// use .then and .catch for errors

p.then((msg)=>{
  console.log('This is then for:', msg);
})
.catch((msg)=> {
  console.log('This is the catch for:', msg);
})

// 2 use Promises instead of callbacks
// create reject with error name and message in an object

const userLeft = false; // boolean 
const userWatchingCatMeme = true; // boolean 

function watchTutorialPromise(){
  return new Promise((resolve, reject)=>{
    if(userLeft){
      reject({
        name: 'Error name: User Left',
        message: 'Error msg: :('
      })
    } else if (userWatchingCatMeme){
      reject({
        name: 'Error name: User Watching Cat Meme',
        message: 'Error msg: Watching cat meme'
      })
    } else {
      resolve('Thumbs up and subscribe');
    }
  })
}

watchTutorialPromise()
.then((message) => {
  console.log('Success:', message);
})
.catch((error)=> {
  console.log(error.name + '\n' + error.message);
})