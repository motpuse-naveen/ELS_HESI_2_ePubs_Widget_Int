//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
  sharedProperties: {
    maxWidth: "960px", //"100%", "90%", "760px", "1024px"
    alignment: "center", //"center", "left"
    pageStateIdentifier: "Id1324750102462300299", //statedata identifier to store data in localstorage.
    saveStateData: "yes", //Flag to allow save state data or not, values are "yes", "no"
  },
  question_groups: {
    group1: {
      id: "group1",
      type: "dropdown",
      placeholder_id: "group1_placeholder",
      groupHeadHtml: `A client who is 1 day postoperative after a left pneumonectomy is lying on his right side with the head of the bed (HOB) elevated 10 degrees. The RN assesses his respiratory rate at 32 breaths/min. In what order would the RN perform the following actions?`,
      commonDropdownOptions: ["1", "2", "3", "4"],
      items: [
        {
          headerImage: {},
          dropdownHtml: `<span>Elevate the HOB #dropdown1#</span>`,
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
          dropdownHtml: `<span>Assist the client into the supine position #dropdown1#</span>`,
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
          dropdownHtml: `<span>Measure the client’s O2 saturation #dropdown1#</span>`,
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
          dropdownHtml: `<span>Administer intravenous (IV) PRN morphine #dropdown1#</span>`,
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
      ],
      /*itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,*/
      correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale: </strong>The RN should assist the client into a supine position for repositioning and full lung expansion. After turning the client supine, elevate the HOB to help with breathing. Then the nurse should measure the client’s O2 saturation. Finally, the RN should administer IM morphine as needed.</p>`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
    group2: {
      id: "group1",
      type: "dropdown",
      placeholder_id: "group1_placeholder",
      groupHeadHtml: `A client with a history of coronary heart disease was admitted to the acute care unit 2 days ago for management of angina. During the assessment, the client states, “I feel like I have indigestion.” In which order would the RN implement care? (Arrange from first action to last.)`,
      commonDropdownOptions: ["1", "2", "3", "4", "5"],
      items: [
        {
          headerImage: {},
          dropdownHtml: `<span>Notify the rapid response team #dropdown1#</span>`,
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
          dropdownHtml: `<span>Administer PRN nitroglycerin prescription #dropdown1#</span>`,
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
          dropdownHtml: `<span>Assess the pulse, respirations, BP, and oxygen saturation #dropdown1#</span>`,
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
          dropdownHtml: `<span>Document assessment in the electronic medical record #dropdown1#</span>`,
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
          dropdownHtml: `<span>Provide 2 L of oxygen via nasal cannula #dropdown1#</span>`,
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
        
      ],
      /*itemsInstruction: `<p>* Lymph nodes are collections of tissue containing white blood cells called lymphocytes.</p>
                        <p>† A squamous cell is a type of epithelial cell.</p>`,*/
      correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale: </strong>For emergency care of the client with chest pain, it is important to quickly gather vital signs, provide O2, administer nitroglycerin, notify the rapid response team, and finally, document.</p>`,
      partialFeedback: `You have one or more incorrect answers.`,
      incorrectFeedback: `Your answers are incorrect.`,
      optionStyleType: "st-decimal",
      itemSeperator: "false",
    },
  },
};
