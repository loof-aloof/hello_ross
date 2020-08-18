namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const Ross = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 f f f 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 7 7 7 7 7 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 f f f 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 f 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 f 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 7 7 7 7 7 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 f f 7 f f 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 f f f f 7 7 f 7 f f 7 f f 7 f 7 7 f f f f 7 7 7 . . . . . . . 
        . . . . . . . 7 7 f 7 7 7 7 f 7 f 7 f f 7 f f 7 f 7 f 7 7 7 7 f 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 f f 7 f f 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 f f 7 f f 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 7 7 7 7 7 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ross)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 7 7 7 7 7 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 f f 1 1 1 f 7 f f 7 f f 7 f 1 f f 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 f f 1 1 1 f 7 f f 7 f f 7 f 1 f f 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ross)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 f f f f 7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 7 7 7 7 7 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 f f 1 f 7 f f 7 f f 7 f 1 1 1 f f 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 f f 1 f 7 f f 7 f f 7 f 1 1 1 f f 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ross)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 7 7 7 7 7 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
        . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
    . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
    . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
    . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
    . . . . . . . . 7 7 7 f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f 7 7 7 . . . . . . . . 
    . . . . . . . 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 7 1 1 1 1 7 7 f f f f f f f 7 7 1 1 1 1 7 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 7 7 7 7 7 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 1 1 f f 1 1 f 7 f f 7 f f 7 f 1 1 f f 1 1 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 1 1 1 1 1 1 f 7 f f 7 f f 7 f 1 1 1 1 1 1 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 7 1 1 1 1 7 f 7 f f 7 f f 7 f 7 1 1 1 1 7 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 7 7 . . . . . . . 
    . . . . . . . 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 . . . . . . . 
    . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
    . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
    . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
    . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
    . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
    . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 
    . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Ross)
scene.setBackgroundImage(img`
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
    `)
