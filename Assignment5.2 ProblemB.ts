// Eat Mixin
class Eat {
    isEatable: boolean;
    eat() {
        this.isEatable = true;
    }

}

// Plays Mixin
class Plays {
    isPlay: boolean;
    play() {
        this.isPlay = true;
    }
}

//Codes Mixin
class Codes {
    isCode: boolean;
    code() {
        this.isCode = true;
    }
}

class Test implements Eat, Plays,Codes {
    constructor() {
        setInterval(() => console.log(this.isPlay + " : " + this.isEatable + " : " + this.Codes), 500);
    }

    interact() {
        this.play();
    }

    // Eat
    isEatable: boolean = false;
    eat: () => void;
    // Play
    isPlay: boolean = false;
    play: () => void;

    //Code
    isCode: boolean = false;
    code: () => void;
}


let testObj = new Test();
setTimeout(() => testObj.interact(), 1000);

