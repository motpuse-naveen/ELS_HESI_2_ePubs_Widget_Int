//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1750102487892",//statedata identifier to store data in localstorage.
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
                  dropdownHtml:`<table>
                    <tr><td>#dropdown1#</td><td></td><td>#dropdown2#</td></tr>
                    <tr><td></td><td>#dropdown3#</td><td></td></tr>
                    <tr><td>#dropdown4#</td><td></td><td>#dropdown5#</td></tr>
                    </table>`,
                  dropdowns:{
                    dropdown1:{values:["Apply fetal monitors", "Perform manual vaginal exam", "Apply suprapubic pressure", "Prepare for cesarean delivery","Place in right lateral position"],correctValue: "Apply fetal monitors",dropdownlabel:"Select Actions to Take", useCommonOptions:"false"},
                    dropdown2:{values:["FHR variability", "Amount of bleeding, clots", "Late decelerations", "Biophysical profile", "Uterine atony"],correctValue: "Amount of bleeding, clots",dropdownlabel:"Select Parameters to Monitor", useCommonOptions:"false"},
                    dropdown3:{values:["Placenta previa", "Umbilical cord prolapse", "Abruptio placentae", "Postpartum hemorrhage"],correctValue: "Abruptio placentae",dropdownlabel:"Select Potential Conditions", useCommonOptions:"false"},
                    dropdown4:{values:["Apply fetal monitors", "Perform manual vaginal exam", "Apply suprapubic pressure", "Prepare for cesarean delivery","Place in right lateral position"],correctValue: "Prepare for cesarean delivery",dropdownlabel:"Select Actions to Take", useCommonOptions:"false"},
                    dropdown5:{values:["FHR variability", "Amount of bleeding, clots", "Late decelerations", "Biophysical profile", "Uterine atony"],correctValue: "Late decelerations",dropdownlabel:"Select Parameters to Monitor", useCommonOptions:"false"}
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> The client in the scenario is most likely experiencing an abruptio placentae. Actions the RN should take include applying fetal monitors to evaluate fetal heart tones and preparing the client for a probable cesarean delivery. The RN would be diligent in observing the amount of bleeding and the passage of clots. The RN would also evaluate fetal heart tones observing for any signs of fetal distress such as late decelerations. These observations will help determine the degree of abruption, assess the condition of both the mother and the fetus, and determine how quickly the infant should be delivered.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
            
        }
    },
};