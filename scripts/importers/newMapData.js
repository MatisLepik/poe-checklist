function getChanges(mapDataString) {
  const oldMaps = require('../../src/data/json/MAPS-3.6.json').list;
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

/**
 * returns { [mapName]: tierInt }
 */
function parseMapData(mapDataString) {
  const lineByLine = mapDataString.split('\n').filter(x => x !== '');
  const byTier = {};
  let currentTier = 0;

  lineByLine.forEach(line => {
    const tierRow = line.match(/tier (\d+)/i);
    if (tierRow) {
      currentTier = Number(tierRow[1]);
      byTier[currentTier] = [];
    } else {
      byTier[currentTier].push(line);
    }
  });

  const output = {};

  Object.entries(byTier).forEach(([tier, maps]) => {
    maps.forEach(map => {
      output[map] = Number(tier);
    });
  });

  return output;
}

getChanges(`Tier 1:

Sulphur Vents Map

Haunted Mansion Map

Desert Map

Ivory Temple Map

Tier 2:

Glacier Map

Thicket Map

Alleyways Map

Lookout Map

Barrows Map

Armoury Map

Tier 3:

Leyline Map

Mausoleum Map

Ashen Wood Map

Relic Chambers Map

Pier Map

Arid Lake Map

Arachnid Tomb Map

Flooded Mine Map

Wharf Map

Pen Map

Tier 4:

Excavation Map

Crater Map

City Square Map

Fields Map

Cage Map

Grotto Map

Cursed Crypt Map

Strand Map

Channel Map

Beach Map

The Coward's Trial

Whakawairua Tuahu

Tier 5:

Marshes Map

Spider Lair Map

Tropical Island Map

Ramparts Map

Burial Chambers Map

Mesa Map

Jungle Valley Map

Peninsula Map

Arcade Map

Fungal Hollow Map

Tier 6:

Mud Geyser Map

Courtyard Map

Ancient City Map

Atoll Map

Maze Map

Promenade Map

Cells Map

Phantasmagoria Map

Waste Pool Map

Overgrown Ruin Map

Primordial Pool Map

Doryani's Machinarium

Hall of Grandmasters

Maelström of Chaos

The Vinktar Square

Tier 7:

Residence Map

Spider Forest Map

Arena Map

Dungeon Map

Racecourse Map

Graveyard Map

Vault Map

Waterways Map

Conservatory Map

Laboratory Map

Overgrown Shrine Map

Acton's Nightmare

Tier 8:

Iceberg Map

Pit Map

Ghetto Map

Bone Crypt Map

Chateau Map

Toxic Sewer Map

Scriptorium Map

Dunes Map

Factory Map

Necropolis Map

Estuary Map

Olmec's Sanctum

Perandus Manor

Pillars of Arun

Death and Taxes

Tier 9:

Arachnid Nest Map

Port Map

Villa Map

Mineral Pools Map

Underground River Map

Underground Sea Map

Castle Ruins Map

Shore Map

Moon Temple Map

Arsenal Map

Lighthouse Map

Mao Kun

The Twilight Temple

Caer Blaidd, Wolfpack's Den

Oba's Cursed Trove

Tier 10:

Sepulchre Map

Coral Ruins Map

Volcano Map

Geode Map

Bog Map

Plateau Map

Lava Chamber Map

Bazaar Map

Academy Map

Temple Map

Poorjoy's Asylum

Tier 11:

Infested Valley Map

Dig Map

Lair Map

Malformation Map

Siege Map

Gardens Map

Crimson Temple Map

Precinct Map

Colonnade Map

Museum Map

The Putrid Cloister

Tier 12:

Lava Lake Map

Cemetery Map

Vaal Pyramid Map

Park Map

Shipyard Map

Core Map

Carcass Map

Canyon Map

Colosseum Map

Hallowed Ground

Vaults of Atziri

Tier 13:

Tower Map

Sunken City Map

Defiled Cathedral Map

Belfry Map

Coves Map

Shrine Map

Plaza Map

Terrace Map

Reef Map

Tier 14:

Primordial Blocks Map

Orchard Map

Wasteland Map

Crystal Ore Map

Courthouse Map

Basilica Map

Dark Forest Map

Tier 15:

Summit Map

Caldera Map

Acid Caverns Map

Desert Spring Map

Palace Map

Tier 16:

Vaal Temple Map

Forge of the Phoenix Map

Maze of the Minotaur Map

Pit of the Chimera Map

Lair of the Hydra Map`).forEach(change => {
  console.log(change);
  console.log('');
});
