import { Context } from "telegraf";

interface CallbackQueryWithData {
  data?: string;
}

export const startButtonCallbackHandler = async (
  buttonClickCtx: Context
): Promise<void> => {
  try {
    console.log("Trigerd");
    // Define the type for the callbackQuery object
    const callbackQuery = buttonClickCtx.callbackQuery as CallbackQueryWithData;

    // Check if data property exists in callbackQuery
    if (callbackQuery.data) {
      // Handle the button click based on the data
      switch (callbackQuery.data) {
        case "Job Notifications":
          // Handle "Job Notifications" button click
          await buttonClickCtx.reply("You clicked on Job Notifications!");
          break;
        case "My CV":
          // Handle "My CV" button click
          await buttonClickCtx.reply("You clicked on My CV!");
          break;

        default:
          // Handle unknown button clicks
          await buttonClickCtx.reply("Unknown button click!");
          break;
      }
    } else {
      // Handle the case where neither data nor text is available
      await buttonClickCtx.reply("Error processing button click!");
    }
  } catch (error: any) {
    console.log(`Error Happend ${error.message}`);
  }
};
