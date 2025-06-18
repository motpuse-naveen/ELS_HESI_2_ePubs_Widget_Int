//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1749825351309",//statedata identifier to store data in localstorage.
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
                dropdownHtml:`<p id="p1820" class="b1textfl"><strong>Scenario:</strong> The PN is caring for a client admitted with heart failure. The home medication list is obtained.</p>
                <p id="p1825" class="b1text">The medication #dropdown1# is contraindicated for clients with a history of heart failure and can worsen symptoms such as #dropdown2#.</p>`,
                dropdowns:{
                  dropdown1:{values:["Furosemide 40 mg PO daily","Potassium chloride 20 mEq PO daily","Pioglitazone 45 mg PO daily","Enalapril 5 mg PO BID"],correctValue: "Pioglitazone 45 mg PO daily",dropdownlabel:"Select the home medication", useCommonOptions:"false"},
                  dropdown2:{values:["Exertional fatigue","Hypotension", "Hyperglycemia", "Unusual bleeding"],correctValue: "Exertional fatigue",dropdownlabel:"Select the symptoms", useCommonOptions:"false"}
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> Pioglitazone is a medication used to treat type 2 diabetes and has been known to cause or worsen heart failure. This medication is contraindicated in clients with heart failure and can lead to worsening symptoms such as exertional fatigue; swelling of the hands, legs, and feet; hypertension; and shortness of breath.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
          },
    },
};