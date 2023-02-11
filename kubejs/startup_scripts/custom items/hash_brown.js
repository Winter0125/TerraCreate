StartupEvents.registry("item", event => {
    event.create("hash_brown").displayName("hash brown").food(food => {
        food
            .hunger(2)
            .saturation(0)
            .alwaysEdible()
    })
})