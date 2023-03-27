import { TwitchGetTokenResponse } from "~~/interfaces";

const { twitchClientId, twitchClientSecret, twitchOAuthUrl } =
  useRuntimeConfig();

class TwitchServicesClass {
  constructor(
    private readonly clientId: string,
    private readonly clientSecret: string,
    private readonly twitchOAuthUrl: string
  ) {}

  async getToken(): Promise<TwitchGetTokenResponse> {
    return await $fetch<TwitchGetTokenResponse>(this.twitchOAuthUrl, {
      method: "POST",
      query: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: "client_credentials",
      },
    });
  }
}

export const TwitchServices = new TwitchServicesClass(
  twitchClientId,
  twitchClientSecret,
  twitchOAuthUrl
);
