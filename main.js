var config = {
    type: Phaser.AUTO,
    width: 1450,
    height: 727,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var bugs;
var makeBugs;
var gameBoundaries;
var cloudPlatforms;
var chickenPlayer;
var iseggPlayer;
var isChicken;
var isKing;
var isRaptor;
var lastCursor;
var scene;
function preload ()
{
    this.load.image('background', 'assets/background.png');
    this.load.image('horizontalboundary', 'assets/cupboundhorizontal.png')
    this.load.image('verticalboundary', 'assets/cupboundvertical.png')
    this.load.image('cloud', 'assets/cloud.png')
    this.load.spritesheet('egg', 'assets/eggsprite.png', { frameWidth: 76, frameHeight: 88 })
    this.load.spritesheet('chicken', 'assets/chickensprite.png', { frameWidth: 82, frameHeight: 60 })
    this.load.spritesheet('raptor', 'assets/raptorsprite.png', { frameWidth: 186, frameHeight: 129 })
    this.load.spritesheet('king', 'assets/kingsprite.png', { frameWidth: 77, frameHeight: 88 })
    this.load.spritesheet('binary', 'assets/binarysprite.png', { frameWidth: 76, frameHeight: 88 })
    this.load.spritesheet('cake', 'assets/cakesprite.png', { frameWidth: 200, frameHeight: 211 })
    this.load.spritesheet('bug', 'assets/bugsprite.png', { frameWidth: 80, frameHeight: 60 });
}

function create ()
{
    //  background, boundaries
    this.background = this.add.image(0, 0, 'background');
    this.background.setOrigin(0,0)

    gameBoundaries = this.physics.add.staticGroup()
    cloudPlatforms = this.physics.add.staticGroup()

    gameBoundaries.create(575, 714, 'horizontalboundary')
    gameBoundaries.create(1138, 355, 'verticalboundary')
    gameBoundaries.create(13, 355, 'verticalboundary')

    //mid-center
    cloudPlatforms.create(450, 440, 'cloud')
    cloudPlatforms.create(700, 440, 'cloud')
    cloudPlatforms.create(550, 410, 'cloud')
    //bottom-mid-right
    cloudPlatforms.create(900, 570, 'cloud')
    cloudPlatforms.create(1040, 440, 'cloud')
    //top-left
    cloudPlatforms.create(170, 270, 'cloud')
    cloudPlatforms.create(440, 225, 'cloud')
    //bottom-left
    cloudPlatforms.create(210, 560, 'cloud')
    
    //top-right
    cloudPlatforms.create(780, 240, 'cloud')
    cloudPlatforms.create(870, 270, 'cloud')

    
     //character avatars

    
  

    //egg
      eggPlayer = this.physics.add.sprite(100, 653, 'egg')
      eggPlayer.setScale(0.80)
     
      eggPlayer.score = 0
      eggPlayer.setCollideWorldBounds(true)

      this.physics.add.collider(eggPlayer, cloudPlatforms)
      this.physics.add.collider(eggPlayer, gameBoundaries)
  
      
   
      this.anims.create({
         key: 'left',
     frames: this.anims.generateFrameNumbers('egg', { start: 0, end: 7 }),
         frameRate: 10,
         repeat: -1
     });

     this.anims.create({
        key: 'staticLeft',
        frames: [ { key: 'egg', frame: 1 } ],
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'staticRight',
        frames: [ { key: 'egg', frame: 15 } ],
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('egg', { start: 8, end: 15 }),
        frameRate: 10,
        repeat: -1
    });

    iseggPlayer = true
 //bugs
  scene = this
 console.log(scene)
  makeBugs = () => {
    var bugs = scene.physics.add.group({
    key: 'bug',
    //repeat: 4,
    setXY: { x: Phaser.Math.Between(0, 900), y: 0, stepX: 70 }
}); 
bugs.children.iterate(function(bug){
    bug.setCollideWorldBounds(true)
    bug.setScale(0.5,0.5)
    bug.setBounce(1,0)
})
this.physics.add.collider(bugs, gameBoundaries)
 this.physics.add.collider(bugs, cloudPlatforms)
 this.anims.create({
    key: 'leftbug',
    frames: [ { key: 'bug', frame: 0 } ],
    frameRate: 10,
    repeat: -1
});
this.anims.create({
    key: 'rightbug',
    frames: [ { key: 'bug', frame: 1 } ],
    frameRate: 10,
    repeat: -1
});
bugs.setVelocityX(-160)

return bugs
}
bugs = makeBugs()


    //chicken
      chickenPlayer = this.physics.add.sprite(100, 650, 'chicken')
      console.log(chickenPlayer)
      chickenPlayer.setScale(1.2)
      chickenPlayer.setBounce(0);
      chickenPlayer.score = 0
      chickenPlayer.setCollideWorldBounds(true)

      this.physics.add.collider(chickenPlayer, cloudPlatforms)
      this.physics.add.collider(chickenPlayer, gameBoundaries)
 
   
      this.anims.create({
         key: 'chickleft',
         frames: this.anims.generateFrameNumbers('chicken', {  start: 0, end: 2}),
         frameRate: 10,
         repeat: -1
     });

     this.anims.create({
         key: 'chickStaticRight',
         frames: [ { key: 'chicken', frame: 3 } ],
         frameRate: 10,
         repeat: -1
     });

     this.anims.create({
        key: 'chickStaticLeft',
        frames: [ { key: 'chicken', frame: 2 } ],
        frameRate: 10,
        repeat: -1
    });

     this.anims.create({
         key: 'chickright',
         frames: this.anims.generateFrameNumbers('chicken', {  start: 3, end: 5}),
         frameRate: 10,
         repeat: -1

       
     });
     chickenPlayer.disableBody(true,true)
     

    // king
     kingPlayer = this.physics.add.sprite(100, 650, 'king')
     kingPlayer.setScale(0.9)
     kingPlayer.setBounce(0);
     kingPlayer.score = 0
     kingPlayer.setCollideWorldBounds(true)

     this.physics.add.collider(kingPlayer, cloudPlatforms)
     this.physics.add.collider(kingPlayer, gameBoundaries)
 
   
     this.anims.create({
        key: 'kingleft',
        frames: this.anims.generateFrameNumbers('king', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'kingturn',
        frames: [ { key: 'king', frame: 1 } ],
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'kingright',
        frames: [ { key: 'king', frame: 1} ],
        frameRate: 10,
        repeat: -1 
     });
     kingPlayer.disableBody(true,true)

    //raptor
    raptorPlayer = this.physics.add.sprite(100, 650, 'raptor')
     raptorPlayer.setScale(0.5)
     raptorPlayer.setBounce(0);
     raptorPlayer.score = 0
     raptorPlayer.setCollideWorldBounds(true)

     this.physics.add.collider(raptorPlayer, cloudPlatforms)
     this.physics.add.collider(raptorPlayer, gameBoundaries)
 
   
     this.anims.create({
        key: 'raptorleft',
        frames: this.anims.generateFrameNumbers('raptor', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'raptorturn',
        frames: [ { key: 'raptor', frame: 5 } ],
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'roarleft',
        frames: [ { key: 'raptor', frame: 3 } ],
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'roarright',
        frames: [ { key: 'raptor', frame: 4 } ],
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'raptorright',
        frames: this.anims.generateFrameNumbers('raptor', { start: 5, end: 7 }),
        frameRate: 10,
        repeat: -1

       
     });

     raptorPlayer.disableBody(true,true)

    // // cake ammo
    // cakeAmmo = this.physics.add.sprite(100, 650, 'cake')
    //  cakeAmmo.setScale(0.18)
    //  cakeAmmo.setBounce(0);
    //  cakeAmmo.score = 0
    //  cakeAmmo.setCollideWorldBounds(true)

    //  this.physics.add.collider(cakeAmmo, cloudPlatforms)
    //  this.physics.add.collider(cakeAmmo, gameBoundaries)
 
   
    //  this.anims.create({
    //     key: 'left',
    //     frames: [ { key: 'cake', frame: 0 } ],
    //     frameRate: 10,
    //     repeat: -1
    // });

    // this.anims.create({
    //     key: 'turn',
    //     frames: [ { key: 'cake', frame: 0} ],
    //     frameRate: 10,
    //     repeat: -1
    // });

    // this.anims.create({
    //     key: 'right',
    //     frames: [ { key: 'cake', frame: 1 } ],
    //     frameRate: 10,
    //     repeat: -1

       
    // });

    


    cursors = this.input.keyboard.createCursorKeys();
  
    
}


// <div id='border'>
//     <div id='bg'></div>
//     <div id='egg'></div>

function update(){

    //egg
if (iseggPlayer) {
     if (cursors.left.isDown && iseggPlayer)
     {
         eggPlayer.setVelocityX(-160);

         eggPlayer.anims.play('left', true);
         lastCursor = "left"
     }
     else if (cursors.right.isDown && iseggPlayer)
     {
         eggPlayer.setVelocityX(160);

         eggPlayer.anims.play('right', true);
         lastCursor = "right"
     }
     else if (lastCursor === "left")
     {
         eggPlayer.setVelocityX(0);

         eggPlayer.anims.play('staticLeft', true);
     }

     else if (lastCursor === "right")
     {
         eggPlayer.setVelocityX(0);

         eggPlayer.anims.play('staticRight', true);
     }

     if (cursors.up.isDown && eggPlayer.body.touching.down && iseggPlayer)
     {
         eggPlayer.setVelocityY(-400);
     }
}
    //bugs
     bugs.children.iterate(function(bug){
        if (bug.body.velocity.x >= 0){
             bug.anims.play("rightbug", true)}
             else
             {
                bug.anims.play("leftbug", true)
             }
        })

    //chicken
    if (isChicken){
    
     if (cursors.left.isDown)
     {
         chickenPlayer.setVelocityX(-160);

         chickenPlayer.anims.play('chickleft', true);
         lastCursor = "left"
     }
     else if (cursors.right.isDown)
     {
         chickenPlayer.setVelocityX(160);

         chickenPlayer.anims.play('chickright', true);
         lastCursor = "right"
     }
     else if (cursors.space.isDown){
         if (lastCursor === "right"){
        chickenPlayer.setVelocityX(520)
     chickenPlayer.anims.play('chickright', true)
         } else if (lastCursor === "left"){
             
             chickenPlayer.setVelocityX(-520)
             chickenPlayer.anims.play('chickleft', true)
         }
     }
     else if (lastCursor === "right")
     {
         chickenPlayer.setVelocityX(0);

         chickenPlayer.anims.play('chickStaticRight', true);
     }
     else if (lastCursor === "left")
     {
         chickenPlayer.setVelocityX(0);

         chickenPlayer.anims.play('chickStaticLeft', true);
     }

     if (cursors.up.isDown && chickenPlayer.body.touching.down)
     {
         chickenPlayer.setVelocityY(-400);
     }
    }
    //king
    if (isKing){
    if (cursors.left.isDown)
    {
        kingPlayer.setVelocityX(-160);

        kingPlayer.anims.play('kingleft', true);
    }
    else if (cursors.right.isDown)
    {
        kingPlayer.setVelocityX(160);

        kingPlayer.anims.play('kingright', true);
    }
    else
    {
        kingPlayer.setVelocityX(0);

        kingPlayer.anims.play('kingturn', true);
    }

    if (cursors.up.isDown && kingPlayer.body.touching.down)
    {
        kingPlayer.setVelocityY(-400);
    }
    }
    // raptor
if (isRaptor){
    if (cursors.left.isDown)
    {
        raptorPlayer.setVelocityX(-160);

        raptorPlayer.anims.play('raptorleft', true);
        lastCursor = "left"
    }
    else if (cursors.right.isDown)
    {
        raptorPlayer.setVelocityX(160);

        raptorPlayer.anims.play('raptorright', true);
        lastCursor = "right"
    }

    else if(cursors.space.isDown){
        if (lastCursor === "left"){
            
            raptorPlayer.setVelocityX(0);
            raptorPlayer.anims.play('roarleft', true);
        }
        if (lastCursor === "right"){
            raptorPlayer.setVelocityX(0);
            raptorPlayer.anims.play('roarright', true);
        }
    }
    else if (lastCursor === "left")
    {
        raptorPlayer.setVelocityX(0);

        raptorPlayer.anims.play('raptorleft', true);
    }
    else if (lastCursor === "right")
    {
        raptorPlayer.setVelocityX(0);

        raptorPlayer.anims.play('raptorright', true);
    }

    if (cursors.up.isDown && raptorPlayer.body.touching.down)
    {
        raptorPlayer.setVelocityY(-400);
    }
    }



    this.physics.add.collider(eggPlayer, bugs, eggBugHit, null, this);
function eggBugHit(eggPlayer, bug){
    if (bug.body.touching.up){
    bug.disableBody(true, true)}
    else if (bug.body.touching.left || bug.body.touching.right || bug.body.touching.down){
        }

     if (bugs.countActive(true) === 0){
        
        iseggPlayer = false
        isChicken = true
        
        becomeChicken(eggPlayer)
        
        
        
     }
    }
    function becomeChicken(player){
       bugs = makeBugs()
        player.setTexture( "chicken")
        chickenPlayer.enableBody(true, eggPlayer.x, eggPlayer.y,true, true)
        eggPlayer.disableBody(true,true)
        scene.physics.add.collider(chickenPlayer, bugs, chickenBugHit, null, scene)
       
        
    }

    function chickenBugHit(chickenPlayer, bug) {
        if(cursors.space.isDown){
        bug.disableBody(true,true)}
        if (bugs.countActive(true) === 0){
    
            isChicken = false
            isRaptor = true
            
            becomeRaptor(chickenPlayer)    
    
            }
        }

        function becomeRaptor(chickenPlayer){
            bugs = makeBugs()
            chickenPlayer.setTexture( "raptor")
            raptorPlayer.enableBody(true, chickenPlayer.x, chickenPlayer.y,true, true)
            chickenPlayer.disableBody(true,true)
            // scene.physics.add.collider(chickenPlayer, bugs, raptorBugHit, null, scene)
        }

    }