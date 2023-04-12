import { TmiClient, rollDice } from "~~/vendors";

export default defineEventHandler(async (event) => {
  try {
    await TmiClient.connect();

    TmiClient.on("message", (channel, tags, message, self) => {
      if (self) {
        return;
      }
      const commandName = message.trim();

      if (commandName === "!dice") {
        const num = rollDice();
        TmiClient.say(channel, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
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
