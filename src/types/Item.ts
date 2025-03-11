// Item Type
export type Item = {
  colloq: string;
  description: string;
  gold: Gold;
  image: ItemImage;
  into?: string[];
  maps: Record<number, boolean>;
  name: string;
  plaintext: string;
  stats: ItemStats;
  tags: string[];
};

export type Gold = {
  base: number;
  purchasable: boolean;
  sell: number;
  total: number;
};

export type ItemImage = {
  full: string;
  group: string;
  h: number;
  sprite: string;
  w: number;
  x: number;
  y: number;
};

export type ItemStats = {
  FlatMovementSpeedMod?: number;
};
