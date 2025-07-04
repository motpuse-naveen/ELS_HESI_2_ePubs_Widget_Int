//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
    pageStateIdentifier: "Id13247501024623299", //statedata identifier to store data in localstorage.
    saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "dropdown",
      placeholder_id: "group1_placeholder",
      groupHeadHtml: `The RN finds an adult client slumped in a chair. Place the RN’s actions in order of priority from first to last for this client.`,
      commonDropdownOptions: ["1", "2", "3", "4", "5", "6", "7"],
      items: [
        {
          headerImage: {},
          dropdownHtml: `<span>Activate the code team and obtain defibrillator. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "2",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>Assess for responsiveness. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "4",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>Assess the cardiac rhythm using the “quick-look” paddles. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "1",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>Assess for a carotid pulse. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "6",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>Open airway and give two rescue breaths by bag-valve mask. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "7",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>Move the client to a flat position in bed or on the floor. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "5",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>Begin compressions. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "3",
              dropdownlabel: "Select an Order",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
      ],
      /*itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,*/
      correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale: </strong>The order in which actions would be performed according to BCLS guidelines is 2, 4, 1, 6, 7, 5, 3. First, determine the client’s level of responsiveness, breathing adequacy and if there is a pulse present. Then, initiate a call for help by activating code team. Then. move the client to the floor so you can begin high quality chest compressions. You deliver 30 compressions followed by 2 breaths. Once the defibrillator arrives, you will check the rhythm using the quick-look paddles.</p>`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
  },
};
