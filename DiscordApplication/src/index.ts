// Require the necessary discord.js classes
import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
