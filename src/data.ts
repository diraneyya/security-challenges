interface ChallengeEntry {
  name: string;
  url: string;
  solution: string;
  level: number;
  notice: string;
  hidden?: boolean;
}

type CallengeEntryWithId = ChallengeEntry | { id: string };

const CHALLENGES_RAW: ChallengeEntry[] = [
  {
    name: "[Web Client] HTML - Code Source",
    url: "http://challenge01.root-me.org/web-server/ch1/",
    solution: "nZ^&@q5&sjJHev0",
    level: 1,
    notice:
      "Crack the password to capture the flag. If you encounter a problem to display the page, I remind you that you must create an account on root-me.org to access certain challenges",
    hidden: true,
  },
  {
    name: "[Web Client] HTML - buttons disabled",
    url: "http://challenge01.root-me.org/web-client/ch25/",
    solution: "HTMLCantStopYou",
    level: 1,
    notice: "Crack the password to capture the flag",
  },
  {
    name: "[Cryptanalysis] Decode",
    url: "http://challenge01.root-me.org/cryptanalyse/ch8/ch8.txt",
    solution: "2ac376481ae546cd689d5b91275d324e",
    level: 1,
    notice: "Decode to capture the flag",
  },
  {
    name: "[Web Client] Javascript - Authentication",
    url: "http://challenge01.root-me.org/web-client/ch9/",
    solution: "sh.org",
    level: 1,
    notice: "Crack the password to capture the flag",
  },
  {
    name: "[Web Server] Very Very Low Password",
    url: "http://challenge01.root-me.org/web-server/ch3/",
    solution: "administrator",
    level: 1,
    notice: "Crack the password to capture the flag",
    hidden: true,
  },
  {
    name: "[Web Client] Rand Game",
    url: "http://challenge01.root-me.org/web-server/ch56/",
    solution: "H7tp_h4s_N0_s3Cr37S_F0r_y0U",
    level: 1,
    notice: "Cheat to win and recover the password",
    hidden: true,
  },
  {
    name: "[Web Client] Hack the bank",
    url: "https://hackxor.net/mission?id=1",
    solution: "13780",
    level: 2,
    notice:
      "Enter the balance amount of bank account N°16554987 to capture the flag",
  },
  {
    name: "[Web Client] Administrator impersonation",
    url: "https://www.newbiecontest.org/epreuves/hacking/ep3/index.php?epreuveid=sdqufhdsqf54sq65df4&numid=qsd46ds5qf65d&forum=sdf4ds&admin=false&mysqlid=sdqsq6f46d5sqsdf65ds4q6f46d5sq4f56ds4qf654dsq6f54dqs56f4dsqf4f",
    solution: "magic",
    level: 2,
    notice: "Impersonate as admin",
  },
  {
    name: "[WebClient] Javascript - Source",
    url: "http://challenge01.root-me.org/web-client/ch1",
    solution: "123456azerty",
    level: 2,
    notice: "Crack the password to capture the flag",
  },
  {
    name: "[XSS] Hack Search",
    url: "https://xss-game.appspot.com/level1",
    solution: "Persistence is key",
    level: 2,
    notice:
      "Injects an alert(). Once successful, enter the exact xss-game level 2 title to capture the flag",
  },
  {
    name: "[Web client] Browser spoofing",
    url: "http://change-browser.hax.w3challs.com/",
    solution:
      "W3C{now_that_we_have_the_right_browser_lets_get_the_party_started}",
    level: 3,
    notice: "Switch your browser to another",
  },
  {
    name: "[WebClient] Javascript - Obfuscation",
    url: "http://challenge01.root-me.org/web-client/ch4/ch4.html",
    solution: "cpasbiendurpassword",
    level: 3,
    notice: "Crack the password to capture the flag",
  },
  {
    name: "[Web Server] HTTP - Directory Indexing",
    url: "http://challenge01.root-me.org/web-server/ch4/",
    solution: "LINUX",
    level: 3,
    notice: "Search in the bowels of the server",
    hidden: true,
  },
  {
    name: "[Web Server] Injection",
    url: "http://challenge01.root-me.org/web-server/ch9/",
    solution: "TYsgv75zgtq",
    level: 4,
    notice: "Recover password for user1",
    hidden: true,
  },
  {
    name: "[Web server] HTTP - Open redirect",
    url: "http://challenge01.root-me.org/web-server/ch52/",
    solution: "e6f8a530811d5a479812d7b82fc1a5c5",
    level: 4,
    notice:
      "Find a way to redirect to a domain other than those offered on the web page and then take a look at the network to capture the flag",
    hidden: true,
  },
  {
    name: "[XSS] Chat scripting",
    url: "https://xss-game.appspot.com/level2",
    solution: "That sinking feeling...",
    level: 4,
    notice:
      "Injects an alert() in the chat. Once successful, enter the exact xss-game level 3 title to capture the flag",
  },
];

export const CHALLENGES: CallengeEntryWithId[] = CHALLENGES_RAW.filter(
  (challenge) => !challenge?.hidden
).map((challenge) => {
  const challengeWithId: CallengeEntryWithId = challenge;
  challengeWithId.id = challenge.name.replaceAll(" ", "");

  return challengeWithId;
});
