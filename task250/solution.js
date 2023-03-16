import { startMiningGame } from "./gameEngine.js";
import { term, config } from './constants.js';
import { updateGold } from "./functions.js";
import { handleKeyPress } from "./handlers.js";

startMiningGame(term, config);
updateGold(term, config);
