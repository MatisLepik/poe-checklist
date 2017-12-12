export const PANTHEON_TYPES = {
  MAJOR: 'MAJOR',
  MINOR: 'MINOR',
};

export default {
  '0': {
    id: 0,
    name: 'Soul of the Brine King',
    type: PANTHEON_TYPES.MAJOR,
    mainEffects: [
      " You cannot be Stunned if you've been Stunned or Blocked a Stunning Hit in the past 2 seconds ",
    ],
    upgrades: [
      {
        effects: ['30% increased Stun and Block Recovery'],
        boss: 0,
      },
      {
        effects: ["You cannot be Frozen if you've been Frozen Recently"],
        boss: 1,
      },
      {
        effects: ['50% reduced Effect of Chill on You'],
        boss: 2,
      },
    ],
  },
  '1': {
    id: 1,
    name: 'Soul of Lunaris',
    type: PANTHEON_TYPES.MAJOR,
    mainEffects: [
      '1% additional Physical Damage Reduction for each nearby Enemy, up to 8%',
      '1% increased Movement Speed for each nearby Enemy, up to 8%',
    ],
    upgrades: [
      {
        effects: ['10% chance to avoid Projectile Damage'],
        boss: 3,
      },
      {
        effects: [
          "5% chance to Dodge Attacks and Spells if you've been Hit Recently",
        ],
        boss: 4,
      },
      {
        effects: ['Avoid Projectiles that have Chained'],
        boss: 5,
      },
    ],
  },
  '2': {
    id: 2,
    name: 'Soul of Solaris',
    type: PANTHEON_TYPES.MAJOR,
    mainEffects: [
      '6% Physical Damage Reduction if there is only one nearby Enemy',
      '20% chance to take 50% less Area Damage from Hits',
    ],
    upgrades: [
      {
        effects: [
          "8% reduced Elemental Damage taken if you haven't been Hit Recently",
        ],
        boss: 6,
      },
      {
        effects: [
          'Take no Extra Damage from Critical Strikes if you have taken a Critical Strike Recently',
        ],
        boss: 7,
      },
      {
        effects: ['50% chance to avoid Ailments from Critical Strikes'],
        boss: 8,
      },
    ],
  },
  '3': {
    id: 3,
    name: 'Soul of Arakaali',
    type: PANTHEON_TYPES.MAJOR,
    mainEffects: [
      '5% reduced Damage taken from Damage Over Time',
      '10% chance to Avoid Lightning Damage when Hit',
    ],
    upgrades: [
      {
        effects: [
          "50% increased Recovery of Life and Energy Shield if you've stopped taking Damage Over Time Recently",
        ],
        boss: 9,
      },
      {
        effects: [
          '30% reduced Effect of Shock on you',
          '30% reduced Shock Duration on You ',
        ],
        boss: 10,
      },
      {
        effects: ['+25% Chaos Resistance against Damage Over Time'],
        boss: 11,
      },
    ],
  },
  '4': {
    id: 4,
    name: 'Soul of Garukhan',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      "+5% chance to Evade Attacks if you've taken a Savage Hit recently",
    ],
    upgrades: [
      {
        effects: [
          "6% increased Movement Speed if you haven't been Hit Recently",
        ],
        boss: 12,
      },
    ],
  },
  '5': {
    id: 5,
    name: 'Soul of Yugul',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      '25% reduced Reflected Damage taken',
      '25% chance to Reflect Enemy Chills and Freezes',
    ],
    upgrades: [
      {
        effects: ["5% reduced Cold Damage taken if you've been Hit Recently"],
        boss: 13,
      },
    ],
  },
  '6': {
    id: 6,
    name: 'Soul of Abberath',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      '5% reduced Fire Damage taken while moving',
      'Unaffected by Burning Ground',
    ],
    upgrades: [
      {
        effects: [
          '10% increased Movement Speed while on Burning Ground',
          '50% reduced Ignite Duration on You',
        ],
        boss: 14,
      },
    ],
  },
  '7': {
    id: 7,
    name: 'Soul of Tukohama',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      'While stationary, gain 2% additional Physical Damage Reduction each second, up to a maximum of 8%',
    ],
    upgrades: [
      {
        effects: [
          'While stationary, gain 0.5% of Life Regenerated per second each second, up to a maximum of 2%',
        ],
        boss: 15,
      },
    ],
  },
  '8': {
    id: 8,
    name: 'Soul of Gruthkul',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      "1% additional Physical Damage Reduction for each Hit you've taken Recently up to a maximum of 5%",
    ],
    upgrades: [
      {
        effects: [
          'Enemies that have Hit you with an Attack Recently have 8% reduced Attack Speed',
        ],
        boss: 16,
      },
    ],
  },
  '9': {
    id: 9,
    name: 'Soul of Ralakesh',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      '25% chance to avoid Bleeding',
      '25% reduced Physical Damage over Time Damage taken while moving',
    ],
    upgrades: [
      {
        effects: ['Cannot be Blinded', 'You cannot be Maimed'],
        boss: 17,
      },
    ],
  },
  '10': {
    id: 10,
    name: 'Soul of Ryslatha',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      "Life Flasks gain 3 Charges every 3 seconds if you haven't used a Life Flask Recently",
    ],
    upgrades: [
      {
        effects: [
          '60% increased Life Recovery from Flasks used when on Low Life',
        ],
        boss: 18,
      },
    ],
  },
  '11': {
    id: 11,
    name: 'Soul of Shakari',
    type: PANTHEON_TYPES.MINOR,
    mainEffects: [
      '5% reduced Chaos Damage taken',
      '25% reduced Chaos Damage over Time taken while in a Caustic Cloud',
    ],
    upgrades: [
      {
        effects: ['Immune to poison'],
        boss: 19,
      },
    ],
  },
};
