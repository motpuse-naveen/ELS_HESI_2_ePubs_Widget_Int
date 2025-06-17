//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1750102458802",//statedata identifier to store data in localstorage.
      saveStateData:"yes",//Flag to allow save state data or not, values are "yes", "no"
    },
    question_groups: {
        group1: {
            id: "group1",
            type: "dropdown",
            placeholder_id: "group1_placeholder",
            commonDropdownOptions:[],
            items: [
                {
                  headerImage:{},
                  dropdownHtml:`<p><strong>Drop-down Rationale:</strong> Complete the statement by choosing the appropriate option from the list.</p>
                  <p>The client is most likely experiencing #dropdown1# as evidenced by the presence of #dropdown2#.</p>`,
                  dropdowns:{
                    dropdown1:{values:["CSF leakage", "Increased ICP", "Spinal Cord Injury", "Skull Fracture"],correctValue: "Increased ICP",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    dropdown2:{values:["Cushing Triad", "Narrowing Pulse Pressure", "Scalp Hematoma", "Improving GCS"],correctValue: "Cushing Triad",dropdownlabel:"Select an option", useCommonOptions:"false"},
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> The evidence listed in the table chronicled from admission to 2 hours after client arrival reveals the presence of Cushing triad, which is a late indicator of increased ICP in a client with a head injury. Cushing triad includes widening pulse pressure, slowing heart rate with full bounding pulse, and slowing and irregular respirations.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "st-none",
            itemSeperator: "true",
            
        }
    },
};