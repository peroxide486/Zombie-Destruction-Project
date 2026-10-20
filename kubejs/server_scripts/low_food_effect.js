PlayerEvents.tick(event => {
    const { player } = event;

    if (player.foodLevel >= 18) {
        player.potionEffects.add('minecraft:strength', 40, 0, false, false);
        player.removeEffect('minecraft:weakness');
        player.removeEffect('minecraft:mining_fatigue');
    } else if (player.foodLevel <= 4 && player.foodLevel > 2) {
        player.potionEffects.add('minecraft:weakness', 40, 0, false, false);
        player.removeEffect('minecraft:strength');
    } else if (player.foodLevel <= 2) {
        player.potionEffects.add('minecraft:mining_fatigue', 40, 0, false, false);
        player.potionEffects.add('minecraft:weakness', 40, 1, false, false);
        player.removeEffect('minecraft:strength');
    }
});
