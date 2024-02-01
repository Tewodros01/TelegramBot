import { Context } from "telegraf";
import { Keyboard } from "../utils/keyboard";

export const startCommand = async (ctx: Context): Promise<void> => {
  // Send a welcome message
  await ctx.reply("Welcome to the Job Portal Bot!");
  // Display a set of buttons at the bottom of the chat
  const buttons = Keyboard.create([
    ["Job Notifications", "My CV"],
    ["My Regular Job", "My Freelance Job"],
    ["More Options"],
  ]).resize();

  await ctx.reply("Choose an option:", buttons);
};
