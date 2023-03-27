import { TwitchServices } from "~~/server/services";
export default defineEventHandler(async (event) => {
  try {
    return TwitchServices.getToken();
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
