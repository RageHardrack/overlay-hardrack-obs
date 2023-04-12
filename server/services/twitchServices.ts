import { TwitchGetRefreshTokenResponse, TwitchGetTokenResponse } from "~~/interfaces";

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

  async getRefreshToken(): Promise<TwitchGetRefreshTokenResponse> {
    return await $fetch<TwitchGetRefreshTokenResponse>(this.twitchOAuthUrl, {
      method: "POST",
      query: {
        grant_type: "refresh_token",
        refresh_token: "",
        client_id: this.clientId,
        client_secret: this.clientSecret,
      },
    });
  }
}

export const TwitchServices = new TwitchServicesClass(
  twitchClientId,
  twitchClientSecret,
  twitchOAuthUrl
);
