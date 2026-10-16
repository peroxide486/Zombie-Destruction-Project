ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:iron_pickaxe' });
    event.remove({ output: 'minecraft:iron_axe' });
    event.remove({ output: 'minecraft:iron_shovel' });
    event.remove({ output: 'minecraft:iron_hoe' });
    event.remove({ output: 'minecraft:iron_sword' });
});
