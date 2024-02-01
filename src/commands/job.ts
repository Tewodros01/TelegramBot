import { Context } from "telegraf";
import { JobService } from "../services/jobService";

export const jobCommand = async (ctx: Context): Promise<void> => {
  try {
    // Fetch job listings
    const jobListings = JobService.getJobListings();

    if (jobListings.length > 0) {
      // Display job listings
      ctx.reply("Here are the latest job listings:");
      jobListings.forEach((job) => {
        const message = `*${job.title} at ${job.company}*\n${job.description}\n`;

        if (job.imageUrl) {
          // If there's an image, include it in the message along with buttons
          const keyboard = [
            [{ text: "Apply Now", url: job.url }],
            [{ text: "More Info", url: job.moreInfoUrl || job.url }],
          ];

          ctx.replyWithPhoto(
            { url: job.imageUrl },
            {
              caption: message,
              parse_mode: "MarkdownV2",
              reply_markup: {
                inline_keyboard: keyboard,
              },
            }
          );
        } else {
          // If no image, just include the text message with buttons
          const keyboard = [
            [{ text: "Apply Now", url: job.url }],
            [{ text: "More Info", url: job.moreInfoUrl || job.url }],
          ];

          ctx.replyWithMarkdownV2(message, {
            reply_markup: {
              inline_keyboard: keyboard,
            },
          });
        }
      });
    } else {
      ctx.reply(
        "No job listings available at the moment. Please check back later."
      );
    }
  } catch (error: any) {
    ctx.reply(`Oops! Something went wrong. Error details: ${error.message}`);
  }
};
