function getChanges(mapDataString) {
  const oldMaps = require('../../src/data/json/MAPS-3.4.json').list;
  const newMapData = parseMapData(mapDataString);
  const updatedTiers = getUpdatedTiers(oldMaps, newMapData);
  const deletedMaps = getDeletedMaps(oldMaps, newMapData);
  const addedMaps = getAddedMaps(oldMaps, newMapData);

  return [
    `Old maps with updated tiers: ${JSON.stringify(updatedTiers.list)}`,
    `${updatedTiers.changeCount} tiers were updated.`,
    `The following maps seem to have been deleted: ${JSON.stringify(
      deletedMaps.map(map => map.name)
    )}`,
    `The following maps seem to have been added: ${JSON.stringify(addedMaps)}`,
  ];
}

function getUpdatedTiers(oldMaps, newMapData) {
  let changeCount = 0;
  const list = oldMaps.map(map => {
    const newTier = newMapData[map.name] || map.tier;
    const didChange = newTier !== map.tier;

    if (didChange) changeCount++;

    return {
      ...map,
      tier: newTier,
      level: didChange ? estimateMapLevel(newTier) : map.level,
    };
  });

  return { list, changeCount };
}

function estimateMapLevel(tier) {
  // Tier 1 starts at 68 (67 + 1 = 68) and seems to go up by 1 linearly with each tier
  return 67 + tier;
}

function getAddedMaps(oldMaps, newMapData) {
  return Object.keys(newMapData).filter(
    newMapName => !oldMaps.find(oldMap => oldMap.name === newMapName)
  );
}

function getDeletedMaps(oldMaps, newMapData) {
  return oldMaps.filter(
    oldMap => oldMap.isOnAtlas && !oldMap.isUnique && !newMapData[oldMap.name]
  );
}

function parseMapData(mapDataString) {
  const lineByLine = mapDataString.split('\n');
  const output = {};

  for (let i = 0; i < lineByLine.length; i += 2) {
    if (lineByLine[i + 1 == null])
      throw new Error('Unexpected data near' + lineByLine[i]);

    output[lineByLine[i]] = Number(lineByLine[i + 1]);
  }

  return output;
}

getChanges(`Flooded Mine Map
1
Channel Map
1
Atoll Map
1
Ramparts Map
1
Dungeon Map
2
Pen Map
2
Arid Lake Map
2
Iceberg Map
2
Thicket Map
2
Armoury Map
2
Graveyard Map
3
Desert Map
3
Cage Map
3
Fungal Hollow Map (Springs)
3
Excavation Map
3
Peninsula Map
3
Grotto Map
3
Bone Crypt Map
3
Shipyard Map
3
Cursed Crypt Map
3
Lookout Map
4
Beach Map
4
Marshes Map
4
Strand Map
4
Glacier Map (Gorge)
4
Lighthouse Map
4
Spider Lair Map
4
Barrows Map
4
Crater Map (Tribunal)
4
Courtyard Map
4
Alleyways Map
5
Port Map
5
City Square Map
5
Maze Map
5
Mausoleum Map
5
Jungle Valley Map
5
Underground Sea Map
5
Residence Map
5
Gardens Map
5
Vaal Pyramid Map
5
Volcano Map
6
Canyon Map
6
Sulphur Vents Map
6
Haunted Mansion Map
6
Fields Map
6
Phantasmagoria Map
6
Academy Map
6
Wharf Map
6
Ashen Wood Map
6
Cemetery Map
6
Precinct Map
6
Cells Map
7
Arcade Map
7
Conservatory Map
7
Toxic Sewer Map
7
Lava Chamber Map
7
Dunes Map
7
Underground River Map
7
Bazaar Map
7
Geode Map
7
Primordial Pool Map
7
Ghetto Map
7
Arachnid Nest Map
8
Laboratory Map
8
Infested Valley Map
8
Overgrown Ruin Map
8
Mud Geyser Map
8
Shore Map
8
Mineral Pools Map
8
Sepulchre Map
8
Wasteland Map
8
Orchard Map
8
Promenade Map
8
Relic Chambers Map
9
Ancient City Map
9
Tropical Island Map
9
Moon Temple Map
9
Waste Pool Map
9
Vault Map
9
Temple Map
9
Arena Map
9
Museum Map
9
Scriptorium Map
9
Waterways Map
9
Leyline Map
10
Coral Ruins Map
10
Plateau Map
10
Estuary Map
10
Belfry Map
10
Pier Map
10
Spider Forest Map
10
Coves Map
10
Pit Map
10
Plaza Map
10
Burial Chambers Map
11
Chateau Map
11
Siege Map
11
Arachnid Tomb Map
11
Bog Map
11
Lair Map
11
Factory Map
11
Mesa Map
11
Crystal Ore Map
11
Park Map
11
Ivory Temple Map
12
Colonnade Map
12
Defiled Cathedral Map
12
Overgrown Shrine Map
12
Castle Ruins Map
12
Villa Map
12
Necropolis Map
12
Malformation Map
12
Arsenal Map
12
Racecourse Map
13
Caldera Map
13
Shrine Map
13
Core Map
13
Colosseum Map
13
Acid Caverns Map (Acid Lakes)
13
Crimson Temple Map
13
Dig Map
13
Reef Map
13
Courthouse Map
14
Terrace Map
14
Dark Forest Map
14
Palace Map
14
Basilica Map
14
Sunken City
14
Carcass Map
14
Tower Map
15
Summit Map
15
Primordial Blocks Map (Torture Chamber)
15
Desert Spring Map
15
Lava Lake Map
15
Pit of the Chimera Map
16
Lair of the Hydra Map
16
Maze of the Minotaur Map
16
Forge of the Phoenix Map
16
Vaal Temple Map
16
The Shaper's Realm
17`).forEach(change => {
  console.log(change);
  console.log('');
});
