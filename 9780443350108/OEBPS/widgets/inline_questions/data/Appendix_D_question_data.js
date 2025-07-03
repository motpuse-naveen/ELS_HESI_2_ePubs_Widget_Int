//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1751566796777",//statedata identifier to store data in localstorage.
      saveStateData:"yes",//Flag to allow save state data or not, values are "yes", "no"
    },
    question_groups: {
        group1: {
            id: "group1",
            type: "cloze", //Fill-in-the-Blank
            placeholder_id: "group1_placeholder",
            items: [
              {
                headerImage:{},
                clozeHtml:`<h2><span class="h1hd" id="st0035">8 Leadership and Delegation: </span>Question 60</h2><p>A 4-year-old admitted with pneumonia weighs 39.6 pounds (18 kg). The HCP has prescribed vancomycin 40 mg/kg/day IV. The order states to divide the dose and give it three times daily. How many milligrams of vancomycin would the child receive in each dose? (Round the answer to the nearest whole number.)</p>
                <p>1. #cloze1# mg/dose</p>`,
                clozes:{
                  cloze1:{correctValue: "240", clozelabel:"fill in the blank"},
                },
                clozePlacement:"inline",//newline
              },
            ],
            correctFeedback: `<p>Your answers is correct.</p><p><strong>Rationale</strong></p>
            <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>40</mn><mo>&#xA0;</mo><mi>m</mi><mi>g</mi><mo>×</mo><mn>18</mn><mo>&#xA0;</mo><mi>k</mi><mi>g</mi></mrow><mrow><mn>3 doses</mn></mrow></mfrac><mo>=</mo><mn>240</mn><mo>&#xA0;</mo><mi>m</mi><mi>g</mi><mo>/</mo><mi>dose</mi></mrow></math></p>`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answer is incorrect.`,
            optionStyleType: "",
            itemSeperator: "false",
        }
    },
};