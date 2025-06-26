//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1750102474239",//statedata identifier to store data in localstorage.
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
                clozeHtml:`<p>A pediatric client is prescribed digoxin for a congenital heart defect. The maintenance dosage ordered is 5 mcg/kg/day. The child weighs 10 kg. The prescription requires the digoxin to be administered twice daily. The RN prepares #cloze1# mcg of digoxin at each dose.</p>`,
                clozes:{
                  cloze1:{correctValue: "25", clozelabel:"fill in the blank"},
                },
                clozePlacement:"inline",//newline
              },
            ],
            correctFeedback: `<p>Your answers is correct.</p><p><strong>Rationale</strong></p>
            <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mo>&#xA0;</mo><mfrac><mi>mcg</mi><mi>kg</mi></mfrac><mo>&#x00D7;</mo><mn>10</mn><mo>&#xA0;</mo><mi>kg</mi><mo>=</mo><mn>50</mn><mo>&#xA0;</mo><mi>mcg</mi></mrow></math></p>
            <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>50</mn><mo>&#xA0;</mo><mfrac><mi>mcg</mi><mi>day</mi></mfrac></mrow><mrow><mn>2</mn><mo>&#xA0;</mo><mi>doses</mi></mrow></mfrac><mo>=</mo><mn>25</mn><mo>&#xA0;</mo><mfrac><mi>mcg</mi><mi>dose</mi></mfrac></mrow></math></p>`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "",
            itemSeperator: "false",
        }
    },
};