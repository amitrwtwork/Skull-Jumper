
import { Point } from './types';

export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 400;

export const GRAVITY = 0.6;
export const JUMP_FORCE = -11;
export const DOUBLE_JUMP_FORCE = -18; // Enhanced force to reach the top hurdles easily
export const MOVE_SPEED = 5;
export const INITIAL_PLAYER_SIZE = 30;
export const GROUND_Y = CANVAS_HEIGHT - 10;

export const LOCAL_STORAGE_KEY = 'monochrome_jumper_highscore';
