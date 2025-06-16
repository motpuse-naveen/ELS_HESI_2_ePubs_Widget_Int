//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1749846553780",//statedata identifier to store data in localstorage.
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
                  dropdownHtml:`<table class="tbody" id="TABC000075t0010">
                  <thead><tr><th scope="col" class="tcolhd1" colspan="2">Complete the following table by choosing the anticipated order for each area of care.</th></tr></thead>
                  <tbody>
                  <tr><td class="tb">Radiology</td><td class="tb">#dropdown1#</td></tr>
                  <tr><td class="tb">Laboratory</td><td class="tb">#dropdown2#</td></tr>
                  <tr><td class="tb">Medication</td><td class="tb">#dropdown3#</td></tr>
                  </tbody>
                  </table>`,
                  dropdowns:{
                    dropdown1:{values:["Abdominal x-ray", "MRI of abdomen", "CT of abdomen", "Pelvic ULS"],correctValue: "CT of abdomen",dropdownlabel:"Select anticipated order", useCommonOptions:"false"},
                    dropdown2:{values:["BNP", "Midstream U/A", "Blood cultures x2", "Urea breath test"],correctValue: "Midstream U/A",dropdownlabel:"Select anticipated order", useCommonOptions:"false"},
                    dropdown3:{values:["Ketorolac", "Ceftriaxone", "Desmopressin", "Nitrofurantoin"],correctValue: "Ketorolac",dropdownlabel:"Select anticipated order", useCommonOptions:"false"},
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> The scenario indicates this client may be experiencing a kidney stone. CT of abdomen is the most accurate radiological procedure to diagnose renal calculi. A midstream U/A can also be effective for diagnosing urinary complications. Ketorolac can decrease pain and relax the ureter to facilitate stone passage. The other orders are not indicated for this client at this time.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "st-none",
            itemSeperator: "true",
            
        }
    },
};