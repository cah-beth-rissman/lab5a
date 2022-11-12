'use strict'

let person = {
    name: "Beth Rissman",
    age: 50,
    computerScientist: true,
    education: ['UofI', 'UNI', 'IAState'], 
    code: function(){
        console.log('I am coding now...');
        retun education;
    }

    let petOne = {
        petName: 'Moe',
        breed: 'Domestic',
        imageName: 'momo',
        interests: ['food', 'toys', 'balls']
        isGoodWithKids: true, 
        isGoodWithDogs: true,
        setAge: function(){
            this.age = randomAge(3,12) + ' Months old';
        }
    };

    petOne.setAge();
    console.log(petOne);
    

    //helper function
    function randomAge(minMonth, maxMonth){
        return Math.floor(Math.random() * (maxMonth - minMonth) + minMOnth);
    }
    