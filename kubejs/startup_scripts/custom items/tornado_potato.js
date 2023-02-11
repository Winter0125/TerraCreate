StartupEvents.registry("item", event => {
    event.create("tornado_potato").displayName("tornado potato").food(food => {
        food
            .hunger(2)
            .saturation(0)
            .alwaysEdible()
    })
})