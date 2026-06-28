const layoutData = JsonIO.read('kubejs/config/creative_layout.json');// || { gearworks_items: ['create:hand_crank']};

for (const key in layoutData) {
  let creativeTab = layoutData[key];

  StartupEvents.registry('creative_mode_tab', event => {
    event.create(creativeTab.name)
      .icon(() => creativeTab.icon)
      .displayName(Text.darkAqua(creativeTab.display_name))
      .content(showRestrictedItems => [])
  });

  StartupEvents.modifyCreativeTab(`kubejs:${creativeTab.name}`, event => {
    event.remove('minecraft:paper');

    for (const item of creativeTab.items) {
      event.add(item);
    }
  });
}
