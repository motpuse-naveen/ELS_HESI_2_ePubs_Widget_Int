//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
    pageStateIdentifier: "Id1737626335358", //statedata identifier to store data in localstorage.
    saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "dropdown",
      placeholder_id: "group1_placeholder",
      commonDropdownOptions: ["1", "2", "3", "4", "5", "6", "7"],
      items: [
        {
          headerImage: {},
          dropdownHtml: `<span>Activate the code team and obtain defibrillator. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue:"2",
              dropdownlabel: "Select the Procedures",
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
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
        {
          headerImage: {},
          dropdownHtml: `<span>Assess the cardiac rhythm using the quick-look paddles. #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "1",
              dropdownlabel: "Select the Procedures",
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
              correctValue:"6",
              dropdownlabel: "Select the Procedures",
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
              correctValue:"7",
              dropdownlabel: "Select the Procedures",
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
              correctValue:"5",
              dropdownlabel: "Select the Procedures",
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
              correctValue:"3",
              dropdownlabel: "Select the Procedures",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        }
      ],
      /*itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                      <p>† A squamous cell is a type of epithelial cell.</p>`,*/
      correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale: </strong>First determine the client’s level of responsiveness and breathing adequacy, and if a pulse is present. Then initiate a call for help by activating the code team. Then move the client to the floor to begin high-quality chest compressions. You deliver 30 compressions followed by 2 breaths. Once the defibrillator arrives, you will check the rhythm using the quick-look paddles.</p>`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group2: {
      id: "group2",
      type: "dropdown",
      placeholder_id: "group2_placeholder",
      commonDropdownOptions: ["1", "2", "3", "4"],
      items: [
        {
          headerImage: {},
          dropdownHtml: `<span>A 70-year-old complaining of a pain level of 8/10 from a hand burn #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue:"2",
              dropdownlabel: "Select the Procedures",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
            headerImage: {},
            dropdownHtml: `<span>A 35-year-old with partial- and full-thickness burns to the anterior and posterior chest #dropdown1#</span>`,
            dropdowns: {
              dropdown1: {
                values: [],
                correctValue: "4",
                dropdownlabel: "Select the Procedures",
                useCommonOptions: "true",
              },
            },
            dropdownPlacement: "inline", //inline
          },
        {
          headerImage: {},
          dropdownHtml: `<span>A 25-year-old with a superficial burn to the right anterior arm and lateral chest #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue: "1",
              dropdownlabel: "Select the Procedures",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
        {
          headerImage: {},
          dropdownHtml: `<span>A 42-year-old with a partial-thickness burn to the anterior lower extremity and confusion #dropdown1#</span>`,
          dropdowns: {
            dropdown1: {
              values: [],
              correctValue:"3",
              dropdownlabel: "Select the Procedures",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        },
      ],
      /*itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                      <p>† A squamous cell is a type of epithelial cell.</p>`,*/
      correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale:</strong> The client with partial- and full-thickness burns to the chest is at greatest risk for respiratory issues and should be assessed first to ensure airway and breathing are maintained. The client with partial-thickness burns to the lower extremities and is confused shows signs of possible deterioration and should be assessed next. The older client should be seen next, and the younger client with superficial burns can be seen last in this group.</p>`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
  },
};
