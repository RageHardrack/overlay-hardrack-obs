import tmi from "tmi.js";

export function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
} 

export const TmiClient = new tmi.Client({
  channels: ["hardrack"],
});

