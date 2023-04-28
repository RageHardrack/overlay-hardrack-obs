import tmi from "tmi.js";

export class TmiClass {
  private instance: tmi.Client;

  constructor(private readonly _channels: string) {
    this.instance = new tmi.Client({
      channels: [this._channels],
    });
  }

  async createConnection() {
    try {
      return await this.instance.connect();
    } catch (error) {
      console.error(error);
    }
  }

  async closeConnection() {
    try {
      return await this.instance.disconnect();
    } catch (error) {
      console.error(error);
    }
  }

  onMessage(
    callbackFn: (
      channel: string,
      userstate: tmi.ChatUserstate,
      message: string,
      self: boolean
    ) => void
  ) {
    this.instance.on("message", callbackFn);
  }

  sendMessage(channel: string, message: string) {
    this.instance.say(channel, message);
  }
}

export const TmiClient = new TmiClass("hardrack");
