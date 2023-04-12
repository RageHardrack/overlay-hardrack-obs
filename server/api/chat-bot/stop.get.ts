import { TmiClient } from "~~/vendors";

export default defineEventHandler(async (event) => {
  try {
    await TmiClient.disconnect();

    return { message: "Bot desactivado correctamente" };
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
