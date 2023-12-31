export type ProgramSource = {
  version: "0.1.0";
  name: "coin_flip";
  instructions: [
    {
      name: "setup";
      accounts: [
        {
          name: "coinFlip";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vendor";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "player";
          type: "publicKey";
        },
        {
          name: "betAmount";
          type: "u64";
        },
        {
          name: "vendorSeed";
          type: "i64";
        }
      ];
    },
    {
      name: "play";
      accounts: [
        {
          name: "coinFlip";
          isMut: true;
          isSigner: false;
        },
        {
          name: "player";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vendor";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "playerChoice";
          type: "u8";
        },
        {
          name: "playerSeed";
          type: "i64";
        }
      ];
    },
    {
      name: "delete";
      accounts: [
        {
          name: "coinFlip";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vendor";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "player";
          type: "publicKey";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "CoinFlip";
      type: {
        kind: "struct";
        fields: [
          {
            name: "players";
            type: {
              array: ["publicKey", 2];
            };
          },
          {
            name: "vendorSeed";
            type: "i64";
          },
          {
            name: "state";
            type: {
              defined: "CoinFlipState";
            };
          },
          {
            name: "betAmount";
            type: "u64";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "playerScore";
            type: "u64";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "accumulator";
            type: "u64";
          },
          {
            name: "resetAccumulator";
            type: "bool";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "CoinFlipState";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Active";
          },
          {
            name: "Finished";
            fields: [
              {
                name: "winner";
                type: "publicKey";
              }
            ];
          }
        ];
      };
    },
    {
      name: "Side";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Heads";
          },
          {
            name: "Tails";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "BetTooSmall";
      msg: "Bet amount is too small";
    }
  ];
};

export const IDL: ProgramSource = {
  version: "0.1.0",
  name: "coin_flip",
  instructions: [
    {
      name: "setup",
      accounts: [
        {
          name: "coinFlip",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vendor",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "player",
          type: "publicKey",
        },
        {
          name: "betAmount",
          type: "u64",
        },
        {
          name: "vendorSeed",
          type: "i64",
        },
      ],
    },
    {
      name: "play",
      accounts: [
        {
          name: "coinFlip",
          isMut: true,
          isSigner: false,
        },
        {
          name: "player",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vendor",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "playerChoice",
          type: "u8",
        },
        {
          name: "playerSeed",
          type: "i64",
        },
      ],
    },
    {
      name: "delete",
      accounts: [
        {
          name: "coinFlip",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vendor",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "player",
          type: "publicKey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "CoinFlip",
      type: {
        kind: "struct",
        fields: [
          {
            name: "players",
            type: {
              array: ["publicKey", 2],
            },
          },
          {
            name: "vendorSeed",
            type: "i64",
          },
          {
            name: "state",
            type: {
              defined: "CoinFlipState",
            },
          },
          {
            name: "betAmount",
            type: "u64",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "playerScore",
            type: "u64",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "accumulator",
            type: "u64",
          },
          {
            name: "resetAccumulator",
            type: "bool",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "CoinFlipState",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Active",
          },
          {
            name: "Finished",
            fields: [
              {
                name: "winner",
                type: "publicKey",
              },
            ],
          },
        ],
      },
    },
    {
      name: "Side",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Heads",
          },
          {
            name: "Tails",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "BetTooSmall",
      msg: "Bet amount is too small",
    },
  ],
};
