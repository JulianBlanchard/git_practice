//Add functionality to randomly select the different message components so they can create a cohesive message
const randomMessages = {
    textOne: ['You are right!', 'I m not sure you got it completely', 'Who do you think you are', 'You got it!', 'Sure thing!'],
    textTwo: ['I might be wrong', 'Well, I Hope not', 'Yup, grandma used to say that'],
    textThree: ['Ok', 'why not', 'are you sure?'],
    textFour: ['I love dogs', 'Who cares about politics', 'tell me about it', 'cannot say better than that']
};

const printMessage = () => {
    let myMessage = [];
    for (element in randomMessages) {
        let index = Math.floor(Math.random() * randomMessages[element].length);
        //console.log(index)
        myMessage.push(randomMessages[element][index]);
    }
    let message = myMessage.join('.')
    return message
}

console.log(printMessage())
