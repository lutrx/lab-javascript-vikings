// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking (Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack () {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let resultViking = randomSaxon.receiveDamage(randomViking.attack());
        let indexOfRandomSaxon = this.saxonArmy.indexOf(randomSaxon);
        if (randomSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.splice(indexOfRandomSaxon, randomSaxon);
        } else {}
        return resultViking;
    }
    saxonAttack () {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let resultSaxon = randomViking.receiveDamage(randomSaxon.attack());
        let indexOfRandomViking = this.vikingArmy.indexOf(randomViking);
        if (randomViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.splice(indexOfRandomViking, randomViking);
        } else {}
        return resultSaxon;
    }
    showStatus () {
        if ((this.saxonArmy.length) === 0 & (this.vikingArmy.length > 0)) {
            return "Vikings have won the war of the century!";
        } else if ((this.vikingArmy.length) === 0 & (this.saxonArmy.length > 0)) {
            return "Saxons have fought for their lives and survived another day...";
        } else if ((this.saxonArmy.length) > 0 & (this.vikingArmy.length > 0)) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    genericAttack (attacker, victim) {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if ((attacker === this.saxonArmy) && (victim === this.vikingArmy)) {
            let resultSaxon = randomViking.receiveDamage(randomSaxon.attack());
            let indexOfRandomViking = this.vikingArmy.indexOf(randomViking);
            if (randomViking.health <= 0) {
                this.vikingArmy = this.vikingArmy.splice(indexOfRandomViking, randomViking);
            } else {}
            return resultSaxon;
        } else if ((attacker === this.vikingArmy) && (victim === this.saxonArmy)) {
            let resultViking = randomSaxon.receiveDamage(randomViking.attack());
            let indexOfRandomSaxon = this.saxonArmy.indexOf(randomSaxon);
            if (randomSaxon.health <= 0) {
                this.saxonArmy = this.saxongArmy.splice(indexOfRandomSaxon, randomSaxon);
            } else {}
            return resultViking;
        }
    }
}
