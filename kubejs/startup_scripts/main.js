StartupEvents.registry('creative_mode_tab', event =>{
    // Creative Tab
    event.create('create_gearworks')
         .icon(() => 'create:large_cogwheel')
         .displayName(Text.darkAqua('Create Gearworks'))
         .content(showRestrictedItems => [
            'create:hand_crank'
         ])
})

StartupEvents.modifyCreativeTab('kubejs:create_gearworks', event => {
    let orderedItems = [
        'create:speedometer',
        'create:stressometer',
        'create:belt_connector',
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel',
        'create:gearbox',
        'create:vertical_gearbox',
        'create:clutch',
        'create:gearshift',
        'create:encased_chain_drive',
        'create:adjustable_chain_gearshift',
        'create:water_wheel',
        'create:large_water_wheel',
        'create:windmill_bearing',
        'simulated:red_portable_engine',
        'create:steam_engine'
    ]
    orderedItems.forEach(item => {
        event.add(item)
    })
})