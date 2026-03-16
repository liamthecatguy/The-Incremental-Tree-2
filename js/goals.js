

addLayer("goals", {
    name: "goals", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "goals", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 0, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
    }},
    color: "#f5f100",
   
    layerShown(){return true},
    achievements: {
        11: {
            name: "Prestiged",
            done() {return player.p.points.gte((1))}, // This one is a freebie
            tooltip: "Get a prestige point."
        },
    },
})

// You can delete the second name from each option if internationalizationMod is not enabled.
// You can use function i18n(text, otherText) to return text in two different languages. Typically, text is English and otherText is Chinese. If changedDefaultLanguage is true, its reversed