# Takimoto™

>"Sojiro, do you like it when I smile?" - Hifumi Takimoto, Best Girl

## What is Takimoto™?

Takimoto is a Discord bot aimed towards server management, moderation, and fun!

## What does it do?

Nothing useful as of right now (if you don't count being best girl), but I'm working on adding functionality to it whenever I have time to!
>"I'll do my darnedest again today!" - Aoba Suzukaze

## What are you currently working on?

- [x] Add command functionality 
- [ ] Add fun commands
- [ ] Add moderation commands

## Wow, Takimoto™ sure looks awesome! How can I add it to my server?

Well, Takimoto™ is currently in development, so you would have to build your own.\
Before building your own Takimoto™, make sure you have the lastest version of [node.js](https://nodejs.org) installed on your computer (LTS is fine)

**1. Create a Discord application, and create a bot user**

You can find the Discord Developer Portal here: https://discordapp.com/developers/applications/
- Click on "Create an application"
- Edit any general information you'd like
- Click on the "Bot" tab
- Under "Build-A-Bot", click on "Add Bot"
- Click on "Click to Reveal Token" and save it somewhere

**THIS TOKEN IS VERY IMPORTANT! DON'T EVER SHARE THIS OR POST IT ONLINE!!!**\
This token is basically your bot's password. If someone else has their hands on your bot token, they can control your bot!

**2. Clone the repository**

You can do this any way you'd like, however, the simplest way is to click the green "Clone or download" button on this repository page and click "Download ZIP". Make sure to unzip it.

**3. Add bot token to project**

Remember that token you were supposed to save? Well you're gonna need it now!\
Create a file called `.env` and put the following in it:
```
BOT_TOKEN=your token here
```

**4. Add owner id to project**

Get your user id from discord. Make sure you have developer mode enabled (Settings/Appearance/Advanced/Developer Mode)

Right click on your username, and click "Copy ID"

https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-

Open `config.json` in the repository and replace `399345739941150720` in `const owner: string = '399345739941150720';` with your ID. This is my ID, so if you don't replace it with your ID, your bot will assume me as its owner!

**5. Install dependencies**

- Open your command terminal (Windows key + R, type "cmd" and hit enter)
- Move the working directory to the repository you just unziped (use "cd")
- Type the following commands
  - `npm install discord.js --save`
  - `npm install dotenv --save`
  - `npm install typescript -g`
  - `npm install @types/dotenv --save-dev`
  - **Optional**: `npm install nodemon --save-dev`

If you get an error stating `'npm' is not recognized as internal or external command, operable program or batch file.` try closing cmd and opening it again. If that doesn't fix it, try rebooting your computer.

**6. Compile the code**

All of the configurations necessary for compiling should be there, so you don't have to worry about the configs. Just type the following into cmd: `npm run-script build`\
If that doesn't work, try `tsc`

You can now run the bot by typing `node .`

**CONGRATS! YOU NOW HAVE YOUR OWN Takimoto™!!!**