StartupEvents.registry("item", event => {
    event.create("honey_tornado_potato").displayName("honey tornado potato").food(food => {
        food
            .hunger(4)
            .saturation(0)
            .alwaysEdible()
    })
})