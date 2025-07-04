//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
    pageStateIdentifier: "Id132475010246231299", //statedata identifier to store data in localstorage.
    saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "dropdown",
      placeholder_id: "group1_placeholder",
      groupHeadHtml: `The arrhythmia alarm sounds on a client on the telemetry unit, indicating that the client is in ventricular tachycardia. Place the PN’s actions for this client in order of priority from first to last.`,
      commonDropdownOptions: ["1", "2", "3", "4", "5"],
      items: [
        {
          headerImage: {},
          dropdownHtml: `<span>Call the rapid response team. #dropdown1#</span>`,
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
          dropdownHtml: `<span>Assess pulse and blood pressure. #dropdown1#</span>`,
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
          dropdownHtml: `<span>Give oxygen via nasal cannula. #dropdown1#</span>`,
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
        {
          headerImage: {},
          dropdownHtml: `<span>Bring defibrillator/crash car to the bedside. #dropdown1#</span>`,
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
          dropdownHtml: `<span>Document the incident. #dropdown1#</span>`,
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
      ],
      /*itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,*/
      correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale: </strong>The PN needs to first assess the client before calling the rapid response team. Also, if the client is truly in ventricular tachycardia, it needs to be determined if it is pulseless v-tach or if the client has a pulse and blood pressure. If there is a pulse, the second action would be to call the rapid response team so that additional help is available. Then, the client needs to have oxygen to maximize oxygenation of the circulating blood. The defibrillator needs to be brought to the bedside to be used for cardioversion. The final activity is to document the findings.</p>`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    
  },
};
