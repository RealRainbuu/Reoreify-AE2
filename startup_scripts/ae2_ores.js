global.ae2ores = {
  stone_ores: true, // False to disable stone certus ores
  stone_charged_ores: true, // False to disable charged stone certus ores
  deepslate_ores: true, // False to disable deepslate certus ores
  deepslate_charged_ores: true // False to disable charged deepslate certus ores
}

StartupEvents.registry("block", event => {
    const ores = {
        "certus_quartz": 3,
        "charged_certus_quartz": 3,
        "deepslate_certus_quartz": 3,
        "deepslate_charged_certus_quartz": 3
    }

    Object.keys(ores).forEach(ore => {
        event.create(ore+"_ore")
            .textureAll("kubejs:block/ores/"+ore)
            .material("stone")
            .hardness(3)
            .harvestTool("pickaxe", ores[ore])
            .requiresTool(true)
    })
})

/*WorldgenEvents.add(event => {
  // Stone non-charged
  event.addOre(ore => {
    ore.id = 'kubejs:glowstone_test_lmao'
    ore.biomes = {}
    ore.addTarget('#minecraft:base_stone_overworld')
  })
})*/
