const layoutData = JsonIO.read('kubejs/config/creative_layout.json');
const creativeData = JsonIO.read('kubejs/data/opertator_utilities.json');

for (const key in layoutData) {
  let creativeTab = layoutData[key];
  let textColor = creativeTab.text_color || '#FFFFFF';

  StartupEvents.registry('creative_mode_tab', event => {
    event.create(creativeTab.name)
      .icon(() => creativeTab.icon)
      .displayName(Text.of(creativeTab.display_name))
      .content(showRestrictedItems => [])
  });

  StartupEvents.modifyCreativeTab(`kubejs:${creativeTab.name}`, event => {
    event.remove('minecraft:paper');
    event.displayName = Text.of(creativeTab.display_name).color(textColor);

    for (const item of creativeTab.items) {
      event.add(item);  
    }
  });
}

for (const key in creativeData) {
  let creativeTab = creativeData[key[key]];
  
  StartupEvents.modifyCreativeTab('minecraft:operator_utilities', event => {
    for (const item of creativeTab.creative.items) {
      event.addAfter('minecraft:debug_stick', item)
    } 
    })
}
