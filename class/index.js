class Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    this.name = name;
    this.speed = speed;
    this.healthPoint = healthPoint;
    this.attackPoint = attackPoint;
    this.isDead = isDead;
  }
  attack() {
    console.log(`${this.name} sedang menyerang`)
  }
  confused() {
    console.log(`${this.name} sedang menghindari serangan`)
  }
}

class Pocong extends Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    super(name, speed, healthPoint, attackPoint, isDead);
  }
  jump() {
    return `${this.name} melakukan serangan sebesar ${this.attackPoint}`
  }
  superJump() {
    return `${this.name} melakukan ultimate dan memberikan kecepatan sebesar ${this.speed}, dan serangan ${this.attackPoint} dikali 100`
  }
}
let Pocong1 = new Pocong("Pocin", 10, 100, 40)
console.log(Pocong1.attack());
console.log(Pocong1.confused());
console.log(Pocong1.jump());
console.log(Pocong1.superJump());


class Zombie extends Enemy {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    super(name, speed, healthPoint, attackPoint, isDead);
  }
  walk() {
    return `${this.name} melakukan serangan sebesar ${this.attackPoint}`
  }
  running() {
    return `${this.name} melakukan ultimate yaitu LARI DARI KENYATAAN`
  }
}
let Zombie1 = new Zombie("Jombi", 40, 100, 30)
console.log(Zombie1.attack());
console.log(Zombie1.confused());
console.log(Zombie1.walk());
console.log(Zombie1.running())