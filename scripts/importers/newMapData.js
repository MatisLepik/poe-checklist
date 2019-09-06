function getChanges(mapDataString) {
  const oldMaps = require('../../src/data/json/MAPS-3.7.json').list;
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
      const withoutMapSuffix = [
        'Whakawairua Tuahu',
        "The Coward's Trial",
        "Doryani's Machinarium",
        "Olmec's Sanctum",
        "Acton's Nightmare",
        'Perandus Manor',
        "Oba's Cursed Trove",
        'Death and Taxes',
        'Maelström of Chaos',
        "Caer Blaidd, Wolfpack's Den",
        'Mao Kun',
        "Poorjoy's Asylum",
        'The Vinktar Square',
        'Hall of Grandmasters',
        'Pillars of Arun',
        'The Twilight Temple',
        'Vaults of Atziri',
        'Hallowed Ground',
        'The Putrid Cloister',
      ];
      byTier[currentTier].push(
        withoutMapSuffix.includes(line) ? line : `${line} Map`
      );
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

Arcade

Jungle Valley

Wharf

Pier

Tier 2:

Alleyways

Cage

Excavation

Sulphur Vents

Armoury

Mesa

Tier 3:

Pen

Desert

Fungal Hollow

Strand

Ivory Temple

Spider Lair

Mausoleum

Ashen Wood

Ramparts

Tropical Island

Whakawairua Tuahu

Tier 4:

Arid Lake

Flooded Mine

Leyline

Burial Chambers

Channel

Barrows

Fields

Crater

Arachnid Tomb

Cursed Crypt

The Coward's Trial

Tier 5:

Lookout

Beach

Marshes

Peninsula

City Square

Relic Chambers

Grotto

Glacier

Haunted Mansion

Thicket

Tier 6:

Lighthouse

Maze

Residence

Bone Crypt

Geode

Estuary

Vault

Overgrown Shrine

Racecourse

Ghetto

Arsenal

Doryani's Machinarium

Olmec's Sanctum

Acton's Nightmare

Tier 7:

Port

Chateau

Conservatory

Ancient City

Underground Sea

Bazaar

Waste Pool

Spider Forest

Factory

Villa

Necropolis

Perandus Manor

Oba's Cursed Trove

Death and Taxes

Tier 8:

Graveyard

Cells

Volcano

Phantasmagoria

Atoll

Underground River

Arachnid Nest

Shore

Sepulchre

Temple

Pit

Maelström of Chaos

Caer Blaidd, Wolfpack's Den

Mao Kun

Poorjoy's Asylum

Tier 9:

Dungeon

Coral Ruins

Laboratory

Courtyard

Mud Geyser

Mineral Pools

Arena

Scriptorium

Promenade

Waterways

Castle Ruins

The Vinktar Square

Hall of Grandmasters

Tier 10:

Iceberg

Toxic Sewer

Academy

Lava Chamber

Dunes

Overgrown Ruin

Moon Temple

Plateau

Bog

Primordial Pool

Pillars of Arun

The Twilight Temple

Tier 11:

Gardens

Vaal Pyramid

Tower

Lair

Caldera

Park

Shrine

Palace

Sunken City

Reef

Vaults of Atziri

Tier 12:

Courthouse

Cemetery

Shipyard

Belfry

Crystal Ore

Malformation

Desert Spring

Plaza

Dig

Hallowed Ground

Tier 13:

Infested Valley

Museum

Wasteland

Precinct

Orchard

Acid Caverns

Crimson Temple

Basilica

Carcass

The Putrid Cloister

Tier 14:

Defiled Cathedral

Summit

Primordial Blocks

Terrace

Core

Colosseum

Lava Lake

Tier 15:

Canyon

Siege

Colonnade

Coves

Dark Forest

Tier 16:

Pit of the Chimera

Lair of the Hydra

Maze of the Minotaur

Forge of the Phoenix

Vaal Temple`).forEach(change => {
  console.log(change);
  console.log('');
});
