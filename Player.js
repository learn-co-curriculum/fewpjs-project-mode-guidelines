class Player {
 constructor(game){
 this.game = game}

  eggPlayer(){
     let eggPlayer = this.game.physics.add.sprite(100, 653, 'egg')
     eggPlayer.setScale(0.80)
     eggPlayer.setBounce(0.3);
     eggPlayer.score = 0
     eggPlayer.setCollideWorldBounds(true)

 
   
     this.game.anims.create({
        key: 'left',
        frames: this.game.anims.generateFrameNumbers('egg', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    this.game.anims.create({
        key: 'turn',
        frames: [ { key: 'egg', frame: 16 } ],
        frameRate: 10,
        repeat: -1
    });

    this.game.anims.create({
        key: 'right',
        frames: this.game.anims.generateFrameNumbers('egg', { start: 8, end: 15 }),
        frameRate: 10,
        repeat: -1
    });

    return eggPlayer

    }

}




// 
