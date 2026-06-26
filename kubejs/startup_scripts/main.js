const layoutData = JsonIO.read('kubejs/config/creative_layout.json') || { gearworks_items: ['create:hand_crank']};
const orderedItems = layoutData.gearworks_items;

StartupEvents.registry('creative_mode_tab', event =>{
    // Creative Tab
    event.create('create_gearworks')
         .icon(() => 'create:large_cogwheel')
         .displayName(Text.darkAqua('Create Gearworks'))
         .content(showRestrictedItems => [ orderedItems[0] ])
})

StartupEvents.modifyCreativeTab('kubejs:create_gearworks', event => {
    for (let i = 1; i < orderedItems.lenght; i++) {
        event.add(orderedItems[i])
        }
})