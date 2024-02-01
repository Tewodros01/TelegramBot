import { Context } from "telegraf";
import { InlineKeyboardButton } from "../types/inline_keyboard_button";

export const jobNotificationCommand = async (ctx: Context): Promise<void> => {
  // Display information about job notifications setup
  const jobNotificationText = `
  Here you can set up the job opportunities you want to get notified on so you no longer have to scroll through the channels to find what you are looking for

  Once you set up your job notifications, the bot will automatically send you job posts that match your sector, experience level, job site, job type, and work location preferences

  You can choose:
  ✅ up to 3 sectors
  ✅ up to 2 experience levels
  ✅ any of the Job sites
  ✅ any number of Job types
  ✅ any single country
  ✅ up to 2 cities of the country

  Job Sectors:
   Software Design and Development
  `;

  // Create command buttons
  const setSectorButton: InlineKeyboardButton = {
    text: "Set Sector",
    callback_data: "set_sector",
  };

  const setExperienceLevelButton: InlineKeyboardButton = {
    text: "Set Experience Level",
    callback_data: "set_experience_level",
  };

  const setJobTypeButton: InlineKeyboardButton = {
    text: "Set Job Type",
    callback_data: "set_job_type",
  };

  const setJobSiteButton: InlineKeyboardButton = {
    text: "Set Job Site",
    callback_data: "set_job_site",
  };

  const setJobCountryButton: InlineKeyboardButton = {
    text: "Set Job Country",
    callback_data: "set_job_country",
  };

  const setJobCityButton: InlineKeyboardButton = {
    text: "Set Job City",
    callback_data: "set_job_city",
  };

  const goBackButton: InlineKeyboardButton = {
    text: "Go Back",
    callback_data: "go_back",
  };

  // Organize command buttons with "Go Back" spanning the entire width
  const inlineKeyboard: InlineKeyboardButton[][] = [
    [setSectorButton, setExperienceLevelButton],
    [setJobTypeButton, setJobSiteButton],
    [setJobCountryButton, setJobCityButton],
    [goBackButton],
  ];

  // Send the message with the text and buttons
  await ctx.replyWithMarkdownV2(jobNotificationText, {
    reply_markup: {
      inline_keyboard: inlineKeyboard,
    },
  });
};
