StartupEvents.registry("item", event => {
    event.create("cheeze_cake").displayName("cheeze cake").unstackable().food(food => {
        food
            .hunger(8)
            .saturation(4)
            .alwaysEdible()
    })
})