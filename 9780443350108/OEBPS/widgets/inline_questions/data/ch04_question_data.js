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
              correctValue: "4",
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
              correctValue:"1",
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
              correctValue:"6",
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
              correctValue:"7",
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
              correctValue:"5",
              dropdownlabel: "Select the Procedures",
              useCommonOptions: "true",
            },
          },
          dropdownPlacement: "inline", //inline
        }
      ],
      itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                      <p>† A squamous cell is a type of epithelial cell.</p>`,
      correctFeedback: `All of your answers are correct.`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
  },
};
