StartupEvents.registry("item", event => {
    event.create("cheeze_tornado_potato").displayName("cheeze tornado potato").food(food => {
        food
            .hunger(4)
            .saturation(0)
            .alwaysEdible()
    })
})