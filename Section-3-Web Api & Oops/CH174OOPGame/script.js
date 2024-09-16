function Player(name)
{
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(xp)
{
    this.points = this.points+xp;

    if(this.points >= 10 )
    {
        this.lvl++;
        this.points -= 10;
    }
}


Player.prototype.describe = function (){
    return `${this.name} is level ${this.lvl} with ${this.points} experiece points`
}

const player1 = new Player('Avanish');
const player2 = new Player('Aditya');


player1.gainXp(4);
player2.gainXp(4);
player1.gainXp(4);
player2.gainXp(4);
player1.gainXp(4);


console.log(player1.describe())
console.log(player2.describe())
