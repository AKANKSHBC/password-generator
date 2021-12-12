var password = {

    "letters" : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    "numbers" : ['0','1','2','3','4','5','6','7','8','9'],
    "special" : ['!','@','#','$','%','^','&','*','?']

};

var letterId = document.getElementById('letterid');
var numberId = document.getElementById('numberid');
var specialId = document.getElementById('specialid');



var passwordOutput = document.getElementById('passwordOutput');
var btnGenerate = document.getElementById('btnGenerate');
var btnCopy = document.getElementById('btnCopy');


function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
        return array;
    };

function generate() {

    var passGene = [];
    var a = [];

    var letters = parseInt(letterId.value);
    var numbers = parseInt(numberId.value);
    var specials = parseInt(specialId.value);

    passGene.push(_.sample(password.letters, letters));
    passGene.push(_.sample(password.numbers, numbers));
    passGene.push(_.sample(password.special, specials));

    for(i=0; i<passGene.length; i++) {
        for(j=0; j<passGene[i].length; j++) {
            a.push(passGene[i][j]);
        };
    };

    
    
    return passwordOutput.innerHTML = shuffleArray(a).join('');
    

};








//Test Area Start
// console.log(letterId + numberId + specialId);

// console.log(_.sample(password.letters, numberId));

// 


//Text Area Ends