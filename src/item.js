export class Item {
    constructor(name){
        this.name = name;
        this.decription = "";
        this.flag = false;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.decription;
    }

    getFlag(){
        return this.flag;
    }

    setName(name){
        this.name = name;
    }

    setDescription(description){
        this.decription = description;
    }

    setFlag(){
        this.flag = true;
    }

    unsetFlag(){
        this.flag = false;
    }
}