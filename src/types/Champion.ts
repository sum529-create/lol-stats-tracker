// Base Champion types (existing)
export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: ChampionStats;
};

export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionBasic = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: ChampionStats;
};

// Extended Champion Detail types (new)
export type ChampionDetail = Champion & {
  lore: string;
  allytips: string[];
  enemytips: string[];
  passive: ChampionPassive;
  spells: ChampionSpell[];
  skins: ChampionSkin[];
};

export type ChampionPassive = {
  name: string;
  description: string;
  image: ChampionImage;
};

export type ChampionSkin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip?: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, unknown>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource: string;
};

// API Response types
export type ChampionListResponse = {
  type: string;
  format: string;
  version: string;
  data: Record<string, ChampionBasic>;
};

export type ChampionDetailResponse = {
  type: string;
  format: string;
  version: string;
  data: Record<string, ChampionDetail>;
};

// Utility type for fetching a single champion detail
export type SingleChampionDetailResponse = ChampionDetail;
