sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.startCountdown(5)
    info.changeScoreBy(1)
    banana.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
let banana: Sprite = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d 8 d d 8 d e e f f . . . . 
. c d 8 d d 8 d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
banana = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 5 f . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 . . . . . . . 
. . . . 5 5 e 5 . . . . . . . . 
. . . 5 5 5 5 5 . . . . . . . . 
. . . 5 5 5 5 . . . . . . . . . 
. . . 5 5 5 . . . . . . . . . . 
. . . 5 e 5 . . . . . . . . . . 
. . . 5 5 5 . . . . . . . . . . 
. . . . 5 5 5 . . . . . . . . . 
. . . . 5 5 e 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . c c f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . c d d b b b f . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f c d d b b b f . . . . . . . . . . . . . . . . 
. . . . . f f b b b b b b b b b b b b b c f f f . . . . . . . c c c c c 
. . . f f b b b b b b b b c b c b b b b b c c c f f . . . . c d b b b c 
. . f b b b b b b b b b b c b b c b b b b c c c c c f f f c d d b b c . 
. f b c b b b b b b b b b b c b c b b b b c c c c c c c c b d b b f . . 
. f b b b b b b b 2 2 2 b b c b b b b b c c c c c c c c c c b b c f . . 
. f f b b 1 1 1 1 2 2 2 b b c b b b b c c c c c c c b c f f b c c f . . 
. . f f 1 1 1 1 1 1 1 1 1 b b b b c c c c c c b b b c c . . f b b c f . 
. . . . c c c c c c c 1 1 1 b d b b b f d d b c c c . . . . . f f b b f 
. . . . . . . . c c c c c c f b d b b b f c c . . . . . . . . . . f f f 
. . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
myEnemy.follow(mySprite, 30)
myEnemy.setPosition(146, 11)
