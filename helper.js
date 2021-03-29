function getDay(option) {
    const action = '';
    switch (option) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    return action;
}

async function getResponse () {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(getRandomInt(7));
     }, 300);
   });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

module.exports = {
    getDay,
    getResponse
}