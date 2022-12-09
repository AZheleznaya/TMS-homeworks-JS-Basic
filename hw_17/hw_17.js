"use strict";

class Developer {
    constructor(name) {
        this.name = name;
    }
    startWork(){
        return `${this.name} start work`;
    }
    endWork() {
        return `${this.name} end work`
    }
}

const pete = new Developer("Pete");
console.log(pete.startWork());
console.log(pete.endWork());

class Frontend extends Developer {
    constructor(name, website) {
        super(name);
        this.website = website;
    }
    buildWebSite() {
        return `${this.name} start build website ${this.website}`
    }
}

const john = new Frontend('john', "IHerb");
console.log(john.startWork());
console.log(john.buildWebSite());
console.log(john.endWork());

class Backend extends Developer {
    constructor(name) {
        super(name);
    }
    buildServer() {
        return `${this.name} start build server`
    }
}

const nastya = new Backend('Nastya');
console.log(nastya.startWork());
console.log(nastya.buildServer());
console.log(nastya.endWork());