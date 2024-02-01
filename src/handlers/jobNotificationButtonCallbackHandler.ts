import { Context } from "telegraf";

export const jobNotificationButtonCallback = async (
  ctx: Context
): Promise<void> => {
  try {
    console.log("Trigerd");
    const callbackQuery = ctx.callbackQuery as { data?: string };

    if (!callbackQuery || !callbackQuery.data) {
      return;
    }

    const callbackData = callbackQuery.data;

    switch (callbackData) {
      case "set_sector":
        await ctx.answerCbQuery("Setting up job sector...");
        // Implement logic for setting up job sector
        break;

      case "set_experience_level":
        await ctx.answerCbQuery("Setting up experience level...");
        // Implement logic for setting up experience level
        break;

      case "set_job_site":
        await ctx.answerCbQuery("Setting up job site...");
        // Implement logic for setting up job site
        break;

      case "set_job_type":
        await ctx.answerCbQuery("Setting up job type...");
        // Implement logic for setting up job type
        break;

      case "set_job_country":
        await ctx.answerCbQuery("Setting up job country...");
        // Implement logic for setting up job country
        break;

      case "set_job_city":
        await ctx.answerCbQuery("Setting up job city...");
        // Implement logic for setting up job city
        break;

      default:
        await ctx.answerCbQuery("Invalid button callback.");
        break;
    }
  } catch (error: any) {
    console.log(`Error ${error.message}`);
  }
};
