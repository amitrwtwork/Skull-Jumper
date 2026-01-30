
export type Point = {
  x: number;
  y: number;
};

export enum GameStatus {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER'
}

export type Player = {
  x: number;
  y: number;
  vy: number;
  size: number;
  jumpCount: number;
};

export type Hurdle = {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
};

export type GameState = {
  player: Player;
  hurdles: Hurdle[];
  score: number;
  missedCount: number;
  highScore: number;
  status: GameStatus;
};
