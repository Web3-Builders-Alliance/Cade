export type ProgramSource = {
  version: "0.1.0";
  name: "four_in_line";
  instructions: [
    {
      name: "createGame";
      accounts: [
        {
          name: "game";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "game";
              },
              {
                kind: "arg";
                type: "string";
                path: "name";
              }
            ];
          };
        },
        {
          name: "payer";
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
          name: "name";
          type: "string";
        },
        {
          name: "players";
          type: {
            vec: "publicKey";
          };
        },
        {
          name: "gameType";
          type: "string";
        }
      ];
    },
    {
      name: "playGame";
      accounts: [
        {
          name: "game";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
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
          name: "play";
          type: "u8";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "Game";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "gameType";
            type: "string";
          },
          {
            name: "board";
            type: {
              vec: {
                defined: "Play";
              };
            };
          },
          {
            name: "players";
            type: {
              vec: "publicKey";
            };
          },
          {
            name: "turn";
            type: "u8";
          },
          {
            name: "status";
            type: "string";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Play";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Empty";
          },
          {
            name: "X";
          },
          {
            name: "O";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "GameCreated";
      fields: [
        {
          name: "name";
          type: "string";
          index: false;
        }
      ];
    },
    {
      name: "GameUpdated";
      fields: [
        {
          name: "name";
          type: "string";
          index: false;
        },
        {
          name: "board";
          type: {
            vec: {
              defined: "Play";
            };
          };
          index: false;
        },
        {
          name: "status";
          type: "string";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "IncorrectUser";
      msg: "Isn't your turn to play";
    },
    {
      code: 6001;
      name: "InvalidCell";
      msg: "You can't use this cell now";
    },
    {
      code: 6002;
      name: "FinishedGame";
      msg: "You can't play, this game status is ended";
    }
  ];
  metadata: {
    address: "D17ocZkgrhNYizSp415zod3Nsd7BHBqjSTAFnPU9WG8A";
  };
};

export const IDL: ProgramSource = {
  version: "0.1.0",
  name: "four_in_line",
  instructions: [
    {
      name: "createGame",
      accounts: [
        {
          name: "game",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "game",
              },
              {
                kind: "arg",
                type: "string",
                path: "name",
              },
            ],
          },
        },
        {
          name: "payer",
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
          name: "name",
          type: "string",
        },
        {
          name: "players",
          type: {
            vec: "publicKey",
          },
        },
        {
          name: "gameType",
          type: "string",
        },
      ],
    },
    {
      name: "playGame",
      accounts: [
        {
          name: "game",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
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
          name: "play",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Game",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "gameType",
            type: "string",
          },
          {
            name: "board",
            type: {
              vec: {
                defined: "Play",
              },
            },
          },
          {
            name: "players",
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "turn",
            type: "u8",
          },
          {
            name: "status",
            type: "string",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "Play",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Empty",
          },
          {
            name: "X",
          },
          {
            name: "O",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "GameCreated",
      fields: [
        {
          name: "name",
          type: "string",
          index: false,
        },
      ],
    },
    {
      name: "GameUpdated",
      fields: [
        {
          name: "name",
          type: "string",
          index: false,
        },
        {
          name: "board",
          type: {
            vec: {
              defined: "Play",
            },
          },
          index: false,
        },
        {
          name: "status",
          type: "string",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "IncorrectUser",
      msg: "Isn't your turn to play",
    },
    {
      code: 6001,
      name: "InvalidCell",
      msg: "You can't use this cell now",
    },
    {
      code: 6002,
      name: "FinishedGame",
      msg: "You can't play, this game status is ended",
    },
  ],
  metadata: {
    address: "D17ocZkgrhNYizSp415zod3Nsd7BHBqjSTAFnPU9WG8A",
  },
};
