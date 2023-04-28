import { TmiClient } from "~~/vendors";

export default defineEventHandler(async (event) => {
  try {
    await TmiClient.createConnection();

    TmiClient.onMessage((channel, tags, message, self) => {
      if (self) return;

      const commandName = message.trim();

      if (commandName === "!dice") {
        
        TmiClient.sendMessage(channel, `You rolled a $hello`);
      } else {
        console.log(`* Unknown command ${commandName}`);
      }
    });

    return { message: "Bot activado correctamente" };
  } catch (error: any) {
    sendError(
      event,
      createError({
        statusCode: 500,
        message: error.message,
      })
    );
  }
});
