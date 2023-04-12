export interface TwitchGetTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface TwitchGetRefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  scope: string[];
  token_type: string;
}
