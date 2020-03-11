namespace SpriteKind {
    export const spriteProjectile = SpriteKind.create()
}
function level3Buttons () {
    // Allows you to move side to side
    controller.moveSprite(spaceShip, 500, 10)
}
// when the spaceship touches the tan color block the
// following happens
scene.onHitTile(SpriteKind.Player, 13, function (sprite2) {
    // allows levels to change
    level += 1
    tileMaps()
    if (level == 1) {
        level2()
    }
    if (level == 2) {
        level4()
    }
    if (level == 3) {
        level5Message()
        lastLevel()
        level3Buttons()
    }
})
function level4 () {
    if (level == 2) {
        // makes spaceShip go up no matter what
        spaceShip.vy = -10
    }
    if (level == 2) {
        thirdMessage()
        // gives a specific location on the tile map
        tiles.placeOnTile(spaceShip, tiles.getTileLocation(4, 235))
    }
}
function sprite () {
    spaceShip = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f d d d d f . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 4 2 . . . . . . . . . . . . . f d d d d f . . . . . . . . . . . . . 2 4 2 . . . . . . . 
. . . 1 5 1 . . . . . . . . . . . . . f d d d d f . . . . . . . . . . . . . 1 5 1 . . . . . . . 
. . . 1 5 1 . . . . . . . . . . . . . f d b b d f . . . . . . . . . . . . . 1 5 1 . . . . . . . 
. . . . 1 2 4 2 . . . . . . . . . . f d d b b d d f . . . . . . . . . . 2 4 2 1 . . . . . . . . 
. . . . 1 1 5 1 . . . . . . . . . . f d d b b d d f . . . . . . . . . . 1 5 1 1 . . . . . . . . 
. . . . 1 1 5 1 . . . . . . . . . . f d d b b d d f . . . . . . . . . . 1 5 1 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . . f d d b b d d f . . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . . f d b b b b d f . . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . f d d b b b b d d f . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . f d d b b b b d d f . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . f d d d b b b b d d d f . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . f d d d d d d d d d d f . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . f f . . . . . . . . f d d d d d d d d d d f . . . . . . . . f f . 1 . . . . . . . . 
. . . . 1 f d d f f f f f . . . f d d d d 9 9 d d d d f . . . f f f f f d d f 1 . . . . . . . . 
. . . . 1 . f d d d a d d f f f f d d d d 9 9 d d d d f f f f d d a d d d f . 1 . . . . . . . . 
. . . . 1 . . f f f f f f f f f d d d d d d d d d d d d f f f f f f f f f . . 1 . . . . . . . . 
. . . . 1 . f d d d d d d d d f d d d d d d d d d d d d f d d d d d d d d f . 1 . . . . . . . . 
. . . . 1 f d d d f a f a f a f f d d d d d d d d d d f f a f a f a f d d d f 1 . . . . . . . . 
. . . . 1 f d d d f a f a f a f f d d f f d d f f d d f f a f a f a f d d d f 1 . . . . . . . . 
. . . . . . f d d d d d d d d f f f f a a f f a a f f f f d d d d d d d d f . . . . . . . . . . 
. . . . . . . f f f f f f f f f d d f f f a a f f f d d f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f f f a a a a a a f f f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . f f f f f f f f . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    // makes spaceShip go up no matter what
    spaceShip.ay = -90
    // gives a position for the spaceship to spawn in
    spaceShip.setPosition(80, 4000)
}
function level2Stars () {
    // the score starts adding up by 3
    info.changeScoreBy(2)
    gap2 = Math.randomRange(1, 3)
    if (gap2 == 0) {
        // asteroid projectile
        shootingStar = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 c 5 5 5 5 5 . . 
. . 5 5 5 5 5 c 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 c 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 c 5 5 5 5 c 5 5 5 5 5 . 
. 5 5 5 c 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 c 5 5 5 5 5 5 5 5 
. . 5 5 5 5 5 c c 5 5 5 5 5 5 5 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
. . . . 5 5 5 5 5 5 5 5 5 5 5 . 
. . . . . . . . 5 5 5 5 5 5 5 . 
. . . . . . . . . 5 5 5 5 5 5 . 
`
    } else if (gap2 == 1) {
        shootingStar = img`
. . . . . . . . . . . . . . . . 
. . . 5 5 . . . . . . . . . . . 
. . 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 c 5 . . . . . 
. . 5 5 5 5 5 c c c 5 . . . . . 
. . 5 5 5 5 5 c c c 5 . . . . . 
. 5 5 5 5 5 c 5 c c 5 5 . . . . 
. 5 5 5 5 5 5 5 c c 5 5 5 . . . 
. 5 5 c 5 5 5 5 c 5 5 5 5 . . . 
. 5 c c 5 5 c c c 5 5 5 5 . . . 
. 5 5 5 5 5 c c c c 5 5 5 . . . 
. 5 5 5 5 5 5 c c c 5 5 5 . . . 
. . 5 5 5 5 5 5 c c 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`
    } else if (gap2 == 2) {
        shootingStar = img`
. . . . 5 5 5 . . . . . . . . . 
. . . 5 5 c 5 5 5 . . . . . . . 
. . 5 c c c c c c 5 5 . . . . . 
. . 5 c c c 5 c c c 5 5 . . . . 
. 5 c c c 5 5 5 c c c 5 . . . . 
5 5 c 5 5 c c 5 c c c 5 . . . . 
5 c c 5 c c c 5 5 c c c 5 . . . 
5 c 5 5 5 c c c c 5 c c c 5 . . 
5 c 5 5 5 5 c c c c 5 c c 5 . . 
5 c c 5 c 5 5 c c c c 5 c 5 . . 
5 5 5 c 5 5 5 5 c c c 5 c 5 . . 
5 5 5 5 c c c c 5 5 5 5 c 5 . . 
. 5 5 . 5 5 5 c c c c c c 5 . . 
. . . . . . 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    } else {
        shootingStar = img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 c c 5 5 5 5 5 5 . . 
. 5 5 5 5 5 c b c 5 5 5 5 5 . . 
. 5 5 5 5 c c b c c 5 5 5 5 . . 
. 5 5 5 5 5 c c c c 5 5 5 5 . . 
. 5 5 5 5 5 5 c c c c 5 5 5 . . 
. 5 5 5 5 5 5 5 5 c c 5 5 5 . . 
. 5 5 5 5 c 5 c 5 c c 5 5 5 . . 
. 5 5 5 5 c c 5 5 c c 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`
    }
    // allows projectile to come from a specific direction
    starProjectile = sprites.createProjectileFromSide(shootingStar, 0, 25)
    starProjectile.left = Math.randomRange(0, 200)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    level = 3
})
function level2 () {
    if (level == 1) {
        // makes spaceShip go up no matter what
        spaceShip.ay = -300
        // Allows you to move side to side
        controller.moveSprite(spaceShip, 500, 0)
    }
    if (level == 1) {
        secondMessage()
        tiles.placeOnTile(spaceShip, tiles.getTileLocation(4, 235))
    }
}
function secondMessage () {
    game.splash("// Transmission Begins //")
    game.splash("We finally got in contact ", "with HQ")
    game.splash("They need a Business", "Package transported ASAP")
    game.splash("Get to Planet Johnson", "In the Tennessee system")
    game.splash("// Transmission Ends //")
}
function lifeSystem () {
    // gives a set amount of lives
    info.setLife(10)
}
function camera () {
    // the camera will follow the spaceship
    scene.cameraFollowSprite(spaceShip)
}
// if a player touches a projectile the following
// happens
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite2, otherSprite) {
    // pause
    pause(175)
    info.changeScoreBy(-2)
    pause(175)
    info.changeLifeBy(-1)
    asteroidProjectile.destroy()
    // clears any affects on the spsaceship
    effects.clearParticles(spaceShip)
    // the camera will shake
    scene.cameraShake(4, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 2) {
        spriteBullet()
    }
    if (level == 3) {
        spriteBullet()
    }
})
function tileMaps () {
    // An array for all the tile maps
    list = [img`
d d d d d d d d d f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 2 f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 2 f f f f 
f f f f f 2 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 2 2 f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f 2 f f f 2 f f f f 
f 2 f f 2 f f f f f 
f 2 f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f 2 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f 2 2 f f f f 
f f f f f f f f f f 
2 f f f f 2 f f f f 
2 f f f 2 f f f f f 
f 2 f 2 f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f 2 f f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f 2 f f f f f 2 f f 
f f 2 2 2 f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f 2 f 
f f f f f f f f f 2 
f f f 2 f f f f f f 
f f 2 2 f 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f 2 2 f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f 2 f f f f f 
f 2 f f f f f f f f 
f 2 f f f f 2 f f f 
f 2 f f f 2 2 f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f 2 f 
f f f f f f f 2 2 f 
f f f f f f f 2 f f 
f 2 2 2 2 2 2 2 2 2 
f f f f 2 f f f f f 
2 2 f f 2 f f f f f 
f 2 f f 2 2 f f f f 
f f 2 f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 2 2 f f f 
f 2 2 2 f 2 f f f f 
2 f 2 2 2 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f 2 f f f 
f f f f f 2 f f f f 
f f f 2 2 f f f f f 
f f f 2 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f 2 f f 
f f f f f 2 f f 2 f 
f f f f f 2 f f f 2 
f f f f f f 2 f f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f f f 2 f f f 2 f f 
f f f 2 f f f f 2 f 
f f 2 f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f 2 
f f f 2 f f f f 2 2 
f 2 2 f f f f f 2 2 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 2 f f 
f f 2 f f f f f 2 2 
f f 2 f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f 2 f f 
f 2 f f f f f f 2 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f 2 2 f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f 2 2 f f f f f f 
f f 2 f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f f f f 
2 f f f f f f f f f 
2 f f f f f f f f f 
2 f f f f f f f f f 
2 2 f f f f f f f f 
f f 2 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
`, img`
f f f f f f f f f f 
d d d d d d d d d d 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f 2 f f f f f 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
2 f f f f f f f f f 
2 f f f 2 f f f f f 
f 2 f f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f 2 f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f 2 f 
f f f f f f f f f 2 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f 2 
f f f f f f f f f f 
2 f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f 2 f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f 2 
f f f f f f f f 2 2 
f f f f f f f f 2 2 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f f f f 2 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f 2 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`, img`
d d d d d d d d d d 
d d d d d d d d d d 
d d d d d d d d d d 
3 3 2 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 3 2 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 2 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 2 3 3 3 
3 3 3 3 3 3 2 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 2 3 3 3 3 
3 3 3 3 3 2 2 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 2 3 3 3 3 3 3 3 
3 3 2 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 2 3 3 
3 3 3 3 3 3 3 2 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 2 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 2 3 3 3 2 3 3 3 3 
3 2 3 3 2 3 3 3 3 3 
3 2 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 2 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 2 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
2 3 3 3 3 2 3 3 3 3 
2 3 3 3 2 3 3 3 3 3 
3 2 3 3 3 3 3 3 3 3 
3 3 2 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 3 2 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 2 3 3 3 3 3 3 3 3 
3 3 2 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 2 3 
3 3 3 3 3 3 3 3 3 2 
3 3 3 3 3 3 3 3 3 3 
3 3 2 3 3 2 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 2 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 2 3 3 3 3 3 3 3 3 
3 3 2 3 3 3 3 3 3 3 
3 3 2 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 2 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 2 
3 3 3 3 3 3 3 3 3 3 
2 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 2 3 3 2 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 2 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 2 
3 3 3 3 3 3 3 3 2 2 
3 3 3 3 3 3 3 3 2 2 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 2 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 2 3 3 
3 3 3 3 3 3 3 3 2 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 2 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 2 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
`, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 5 f f f f f f f f f f 5 f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 5 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 f f 
f f f f f f f f f f f f f f f f 
f f 5 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`]
    scene.setTileMap(list[level])
}
function startingText () {
    // gives a background image
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f 1 f f 2 f f f f f f f f f f f f f f f f f f 2 f f 1 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b c c c 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c c c c c a c c c c c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c a a f f a f f a a c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c c f 4 4 4 4 4 f c c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c c f 4 4 4 4 4 f c c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c a f 4 4 4 4 4 f a c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c a a f f f f f a a c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b c c 4 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b f 4 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    game.splash("// Transmission Begins //", "Welcome Recruit.")
    game.splash("FBLA HQ has urgently ", "requested for assistance.")
    game.splash("We will identify and", "provide details on the way.")
    game.splash("Good Luck Recruit. We are", "all counting on you.")
    game.splash("// Transmission Ends //")
    game.splash("USE AWDS TO MOVE")
}
function spriteBullet () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spaceShip, 0, -1000)
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spaceShip, 0, -1000)
    projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spaceShip, 0, -1000)
    projectile2.setPosition(projectile.x - 20, projectile.y)
    projectile3.setPosition(projectile.x - -20, projectile.y)
    // When the spaceship fires projectiles, it will then
    // turn and identify as a friendly projectile instead
    if (spaceShip.kind() == SpriteKind.Player) {
        projectile.setKind(SpriteKind.spriteProjectile)
        projectile.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 a a a a a 4 4 4 . . . 
. . 4 4 a a a a a a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a a a a a a 4 4 . . . 
. . 4 4 4 a a a a a 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        projectile2.setKind(SpriteKind.spriteProjectile)
        projectile2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 a a a a a 4 4 4 . . . 
. . 4 4 a a a a a a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a a a a a a 4 4 . . . 
. . 4 4 4 a a a a a 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        projectile3.setKind(SpriteKind.spriteProjectile)
        projectile3.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 a a a a a 4 4 4 . . . 
. . 4 4 a a a a a a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a c c c a a 4 4 . . . 
. . 4 4 a a a a a a a 4 4 . . . 
. . 4 4 4 a a a a a 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
}
function lastLevel () {
    if (level == 3) {
        // makes spaceShip go up no matter what
        spaceShip.ay = 0
    }
    if (level == 3) {
        info.startCountdown(15)
        _package = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . e e e e e e e e e e . . . 
. . . e e e b e e b e e e . . . 
. . . e e b b e e b b e e . . . 
. . . e b b b 5 5 b b b e . . . 
. . . e b b d d d d b b e . . . 
. . . e b b b 5 5 b b b e . . . 
. . . e e b b e e b b e e . . . 
. . . e e e b e e b e e e . . . 
. . . e e e e e e e e e e . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        tiles.placeOnTile(_package, tiles.getTileLocation(8, 9))
        tiles.placeOnTile(spaceShip, tiles.getTileLocation(8, 13))
    }
}
sprites.onOverlap(SpriteKind.spriteProjectile, SpriteKind.Food, function (sprite2, otherSprite) {
    otherSprite.destroy()
    // you win the game
    game.over(true, effects.confetti)
})
function level5Message () {
    game.splash("// Transmission Begins //")
    game.splash("All the FBLA books", "are in the package")
    game.splash("It's too late.", "Destroy it before it")
    game.splash("Get in the", "wrong hands")
    game.splash("// Transmission Ends //")
}
function levell3Score () {
    info.changeScoreBy(3)
}
function thirdMessage () {
    // gives a message on the screen
    game.splash("// Transmission Begins //")
    game.splash("Asteroids are", "heading your way")
    game.splash("Get rid of it", "And get here ASAP")
    game.splash("You have been", "Authorized to use")
    game.splash("Boosters and", "Force")
    game.splash("// Transmission Ends //")
    game.splash("USE SPACE TO FIRE AND S TO STOP")
}
// If a projectile touches a sprite Projectile it gets
// destoryed
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spriteProjectile, function (sprite2, otherSprite) {
    sprite2.destroy()
    otherSprite.destroy()
})
function level3Asteroids () {
    if (level == 2) {
        constantAsteroid = img`
. . . . 4 4 5 5 2 4 . . . . . . 
. . . . 4 2 8 4 4 4 4 2 . . . . 
. . . 4 8 2 b b b b 4 4 . . . . 
. . . 2 b b c c c c b 4 . . . . 
. . . 2 b c c 2 c c c b 2 . . . 
. . . b b c c c c c c b b . . . 
. . . b c c c c c c f . b . . . 
. . . b c 2 c c c c c b b . . . 
. . . b c 2 c c c c c b . . . . 
. . b f c 2 c c c c c b . . . . 
. . b c c c c c c 2 c b . . . . 
. . b c c c f c c 2 c b . . . . 
. . . b b c c c c c b b . . . . 
. . . . b b b b b b . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        asteroidProjectile = sprites.createProjectileFromSide(constantAsteroid, 0, 25)
        asteroidProjectile.left = Math.randomRange(0, 175)
    }
}
info.onLifeZero(function () {
    // you lose if life = 0
    game.over(false)
})
function level1Asteroids () {
    info.changeScoreBy(1)
    // chooses randomly between these 3 gaps
    gap = Math.randomRange(1, 3)
    if (gap == 0) {
        // asteroid projectile
        asteroid1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . b b b b b c b b b b b . . 
. . b b b b b c b b b b b b . . 
. b b b b b b b b b b b b b b . 
. b b b c b b b b b b b b b b . 
. b b b c b b b b c b b b b b . 
. b b b c b b b b b b b b b b . 
. . b b b b b c b b b b b b b b 
. . b b b b b c c b b b b b b b 
. . . b b b b b b b b b b b b b 
. . . . b b b b b b b b b b b . 
. . . . . . . . b b b b b b b . 
. . . . . . . . . b b b b b b . 
`
        asteroid2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . 
. . . . . . b b b b b b b b . . 
. . . . . b b b b b b b b b . . 
. . . . b b c c b b b b b b . . 
. . . b b c c b b b b b b b . . 
. . . b c c b b b b b b b b . . 
. . . b c b b b b b b b b . . . 
. . . b c c b b b b b b . . . . 
. . . . b b c c c c b . . . . . 
. . . . . b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    } else if (gap == 1) {
        asteroid1 = img`
. . . . . . . . . . . . . . . . 
. . . b b . . . . . . . . . . . 
. . b b b b b b . . . . . . . . 
. . b b b b b b b b b . . . . . 
. . b b b b b b b c b . . . . . 
. . b b b b b c c c b . . . . . 
. . b b b b b c c c b . . . . . 
. b b b b b c b c c b b . . . . 
. b b b b b b b c c b b b . . . 
. b b c b b b b c b b b b . . . 
. b c c b b c c c b b b b . . . 
. b b b b b c c c c b b b . . . 
. b b b b b b c c c b b b . . . 
. . b b b b b b c c b b . . . . 
. . . b b b b . b b b . . . . . 
. . . . . . . . . . . . . . . . 
`
        asteroid2 = img`
. . . . . . . . . . . . . . . . 
. . . b b b b b b b b . . . . . 
. . b b b b b b b b b b . . . . 
. . b b b b b b b b b b b . . . 
. . b b b c b b b b b b b . . . 
. . b b c c c b b b b b b b . . 
. . b b b b c c c b b b b b b . 
. b b b c c c c c b b b c c b . 
. b b b b c c c b c c b b b b . 
. b b b b b c c c b b b b b b . 
. b b b b b b b b b b b b b . . 
. . b b b b c c b c b b b b . . 
. . b b b b b c c c b b b . . . 
. . . . . b b b b b b b . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    } else if (gap == 2) {
        asteroid1 = img`
. . . . b b b . . . . . . . . . 
. . . b b c b b b . . . . . . . 
. . b c c c c c c b b . . . . . 
. . b c c c b c c c b b . . . . 
. b c c c b b b c c c b . . . . 
b b c b b c c b c c c b . . . . 
b c c b c c c b b c c c b . . . 
b c b c b c c c c b c c c b . . 
b c b c b b c c c c b c c b . . 
b c c b c b b c c c c b c b . . 
b b b c b b b b c c c b c b . . 
b b b b c c c c b b b b c b . . 
. b b . b b b c c c c c c b . . 
. . . . . . b b b b b b b . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        asteroid2 = img`
. . . . . . . . b b b b . . . . 
. . . . . b b b b b b b b b . . 
. . . . . b b b b b b b b b . . 
. . . . b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
. . b b b b b b b b b b b . . . 
. b b b b b b b b b b b b . . . 
. b b b b c c b b b b b b b . . 
. b b b b c c b b b b f b b . . 
b b b b c c c c b b b b b b . . 
b b b b b b b b b b b . . . . . 
. b b b b b b b b b b . . . . . 
. . b b b b b b b b b . . . . . 
. . . b b b b b b b . . . . . . 
. . . . b b b b b . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    } else {
        asteroid1 = img`
. . . . . b b b b b b . . . . . 
. . b b b b b b b b b b b . . . 
. b b b b b b b b b b b b b . . 
. b b b b b c c b b b b b b . . 
. b b b b b c b c b b b b b . . 
. b b b b c c b c c b b b b . . 
. b b b b b c c c c b b b b . . 
. b b b b b b c c c c b b b . . 
. b b b b b b b b c c b b b . . 
. b b b b c b c b c c b b b . . 
. b b b b c c b b c c b b b . . 
. b b b b b b b b b b b b b . . 
. b b b b b b b b b b b b b . . 
. b b b b b b b b b b b b . . . 
. . . . b b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`
        asteroid2 = img`
. . . . . . . . b b b b b . . . 
. . . b b b b b b b b b b b b . 
. . b b b b b c c c c c c c b . 
. b b c c c c b b b b b b c b b 
b b b b b b b b b b b b b c b b 
b b b b b b b b b b b b b c b b 
b b b b c c b b b b b b b c b . 
b b b b b c b c c c c c c c b . 
b b b c b b b c c b b b b b b . 
b b b b b c c c b b b b b b b . 
b b b b b b b b b b b b b b . . 
b b b b b b b b b b b b b b . . 
b b b b b b b b b b b b b . . . 
. b b b b b b b b b b b . . . . 
. . . b b b b b b . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    }
    asteroidProjectile = sprites.createProjectileFromSide(asteroid1, 0, 25)
    // the asteroid will come from anywhere on that side
    // of the screen
    asteroidProjectile.left = Math.randomRange(0, 120)
    asteroidProjectile = sprites.createProjectileFromSide(asteroid1, 0, 25)
    asteroidProjectile.right = Math.randomRange(0, 120)
}
let asteroid2: Image = null
let asteroid1: Image = null
let gap = 0
let constantAsteroid: Image = null
let _package: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let list: Image[] = []
let asteroidProjectile: Sprite = null
let starProjectile: Sprite = null
let shootingStar: Image = null
let gap2 = 0
let spaceShip: Sprite = null
let level = 0
// sets the first level
level = 0
scene.setTile(13, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
startingText()
tileMaps()
sprite()
camera()
lifeSystem()
// Allows you to move side to side
controller.moveSprite(spaceShip, 500, 0)
game.onUpdateInterval(100, function () {
    level3Asteroids()
})
// when level 2 is reached the stars will come
game.onUpdateInterval(1400, function () {
    if (level == 0) {
        level1Asteroids()
    }
})
game.onUpdate(function () {
    if (level == 2) {
        level3Buttons()
    }
})
game.onUpdate(function () {
    // makes sure the spaceship stays on the screen
    spaceShip.setFlag(SpriteFlag.StayInScreen, true)
})
game.onUpdateInterval(675, function () {
    if (level == 1) {
        level2Stars()
    }
})
game.onUpdateInterval(1000, function () {
    if (level == 2) {
        levell3Score()
    }
})
