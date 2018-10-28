const fs = require('fs');
const readline = require('readline');
const command = process.argv[2];

if(command === 'init'){
    console.log('it works!')
} else {
    console.log('test 2')
}

if(fs.existsSync('package.json')){
    process.exit()
};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userAnswers = [];

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  userAnswers.push(answer);


  rl.question('How are you? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      userAnswers.push(answer);


      rl.question('question 3? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        userAnswers.push(answer);


        rl.question('question 4? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            userAnswers.push(answer);

            rl.question('question 5? ', (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
                userAnswers.push(answer);
                const fileContent = JSON.stringify({userAnswers});
                fs.writeFileSync("package.json", fileContent)
                rl.close();
              });
          });
      });
    });
}); 





// console.log('package exist?', fs.existsSync('package.json'))
// console.log('index exist?', fs.existsSync('index.js'))