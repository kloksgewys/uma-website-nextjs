export enum ProjectCategory {
  DigitallyNativeIndex = 'digitally-native-index',
  YieldDollar = 'yield-dollar',
  SyntheticAssetExchange = 'synthetic-asset-marketplace',
}

export enum Socials {
  Twitter,
  GitHub,
  Discord,
  Medium,
}

export const PROJECTS = [
  {
    id: 'eth-btc-tracking-token',
    name: 'ETH/BTC',
    icon: (
      <div className="box__icon">
        <span>ETH</span>
        <span>BTC</span>
      </div>
    ),
    category: ProjectCategory.DigitallyNativeIndex,
    description:
      'This is an expiry token that tracks the ETHBTC price ratio. If ETH outperforms BTC the token value will go up; if ETH underperforms, the token value will decrease.',
    learnMoreLink:
      'https://www.theblockcrypto.com/post/66041/umas-new-eth-btc-synthetic-token-is-its-first-one-with-a-priceless-design',
    launchDate: new Date(2020, 4),
    contractAddress: '0x6d002a834480367fb1a1dC5F47E82Fde39EC2c42',
    socials: [
      {
        type: Socials.GitHub,
        link: 'https://github.com/umaprotocol',
      },
      {
        type: Socials.Twitter,
        link: 'https://twitter.com/umaprotocol/status/1263187569195601922?lang=en',
      },
      {
        type: Socials.Discord,
        link: 'https://discord.com/invite/jsb9XQJ',
      },
      {
        type: Socials.Medium,
        link: 'https://medium.com/uma-project/ethbtc-synthetic-token-is-live-e3fe2242c2fe',
      },
    ],
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    icon: (
      <div className="box__icon box__icon--alt box__icon--light-green">
        <div className="box__image">
          <img src="/assets/images/svg/logo-jarvis.svg" alt="" />
        </div>
      </div>
    ),
    category: ProjectCategory.SyntheticAssetExchange,
    description:
      'A set of protocols allowing anyone to become a broker by funding and maintaining liquidity pools with stablecoins, against which anyone can gain exposure to the price of any traditional or digital assets.',
    learnMoreLink: 'https://jarvis.network/',
    launchDate: new Date(2020, 1),
    socials: [
      {
        type: Socials.GitHub,
        link: 'https://github.com/jarvis-network',
      },
      {
        type: Socials.Twitter,
        link: 'https://twitter.com/Jarvis_Network',
      },
      {
        type: Socials.Discord,
        link: 'https://discord.com/invite/gTBjQA5',
      },
      {
        type: Socials.Medium,
        link: 'https://medium.com/jarvis-network',
      },
    ],
  },
  {
    id: 'mario',
    name: 'Mario Cash',
    icon: (
      <div className="box__icon box__icon--alt box__icon--light-red">
        <div className="box__image">
          <img src="assets/images/Mario2.svg" alt="" />
        </div>
      </div>
    ),
    category: ProjectCategory.DigitallyNativeIndex,
    description: 'A Bitcoin Cash synthetic token backed by renBTC.',
    learnMoreLink: 'https://mario.cash/',
    launchDate: new Date(2020, 11),
    contractAddress: '0x84bd083b1c8bf929f39c98bc17cf518f40154f58',
    socials: [
      {
        type: Socials.Twitter,
        link: 'https://twitter.com/youmychicfila',
      },
    ],
    featured: true,
  },
];
