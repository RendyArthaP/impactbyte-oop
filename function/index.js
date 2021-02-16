function Enemy(name, speed, healthPoint, attackPoint, isDead) {
  this.name = name;
  this.speed = speed;
  this.healthPoint = healthPoint;
  this.attackPoint = attackPoint;
  this.isDead = isDead;

  this.attack = function() {
    return "It's time to ATTACK!!"
  }

  this.confused = function() {
    return "Yeah your attack is MISS!!"
  }
}

function Pocong(name, speed, healthPoint, attackPoint, isDead) {
  Enemy.call(this, name, speed, healthPoint, attackPoint, isDead)

  this.jump = function() {
    return `${this.name} sedang lompat indah`
  }
  this.superJump = function() {
    return `${this.name} sedang melakukan ultimate yaitu LOMPATAN INDAH!!`
  }
}

function Zombie(name, speed, healthPoint, attackPoint, isDead) {
  Enemy.call(this, name, speed, healthPoint, attackPoint, isDead)

  this.walk = function() {
    return `${this.name} sedang jalan santuy`
  }
  this.running = function() {
    return `${this.name} sedang melakukan ultimate yaitu LARI DARI KENYATAAN`
  }
}

let pocong1 = new Pocong("congpo", 20, 100, 10);
let zombie1 = new Zombie("jombay", 10, 100, 20);

pocong1.superJump();
zombie1.running();
