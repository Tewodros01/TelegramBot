import { Telegraf, Context } from "telegraf";
import * as commands from "./commands";
import * as handlers from "./handlers";

const TELEGRAM_BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN ||
  "6632933534:AAGWoS0lEZndsAFMUUR_YmBdQDH7pn8Ny-Y";

const bot = new Telegraf<Context>(TELEGRAM_BOT_TOKEN);

// Register commands
bot.start(commands.startCommand);
bot.command("Job", commands.jobNotificationCommand);
// Register handlers
bot.action(/set_\w+/, handlers.jobNotificationButtonCallback);
bot.action("go_back", (ctx) => ctx.reply("Going back to the main menu."));

bot.action(/.*/, (ctx) => ctx.reply("Test Cliked."));

// Add more handler registrations as needed

bot.launch().then(() => console.log("Job Portal Bot is running"));
