//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1750102514087",//statedata identifier to store data in localstorage.
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
                  dropdownHtml:`<p><strong>Question #3 (Drop-Down Cloze):</strong> Complete the following statements.</p>
                  <p>The RN identifies this rhythm as #dropdown1#. The RN places the client on continuous telemetry.</p>
                  <p>The RN would recognize the priority client problem is #dropdown2# associated with this rhythm.</p>`,
                  dropdowns:{
                    dropdown1:{values:["Atrial flutter", "Supraventricular tachycardia", "Atrial fibrillation", "Complete heart block"],correctValue: "Atrial Fibrillation",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    dropdown2:{values:["High blood pressure", "Risk for stroke", "Need for health teaching", "Decreased clotting"],correctValue: "Risk for Stroke",dropdownlabel:"Select an option", useCommonOptions:"false"},
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> Risk for stroke is the priority client problem when experiencing atrial fibrillation. Clients have an increased likelihood of developing a clot within the atria due to incomplete emptying of blood from the heart chambers. If the clot leaves the atria, it can travel through the circulatory system to the brain and cause a stroke. Treatment for atrial fibrillation is most likely to cause low blood pressure, not high. The client will require health teaching, but this is not the priority nursing problem. Atrial fibrillation causes increased risk of clotting, not decreased.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
        },
        group2: {
            id: "group2",
            type: "dropdown",
            placeholder_id: "group2_placeholder",
            commonDropdownOptions:[],
            items: [
                {
                  headerImage:{},
                  dropdownHtml:`<p><strong>Question #2 (Drop-Down Rationale):</strong> Complete the following sentence using the options in the drop-down lists.</p>
                  <p>The client is experiencing #dropdown1# as evidenced by #dropdown2# amount of #dropdown3#.</p>`,
                  dropdowns:{
                    dropdown1:{values:["Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis"],correctValue: "Respiratory alkalosis",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    dropdown2:{values:["increased", "decreased", "normal"],correctValue: "decreased",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    dropdown1:{values:["PaCO₂", "HCO₃", "PaO₂", "SaO₂"],correctValue: "PaCO₂",dropdownlabel:"Select an option", useCommonOptions:"false"},
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> PaCO₂ levels below 35 mmHg indicate respiratory alkalosis. Normal levels of PaCO2 are 35-45 mmHg. This ABG shows that the client is hyperventilating and blowing off too much CO2 which is leading to an alkalotic state. This is also evident with the previous assessment findings documenting a respiratory rate (RR) of 24 breaths per minute.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
        },
        group3: {
            id: "group3",
            type: "dropdown",
            placeholder_id: "group3_placeholder",
            commonDropdownOptions:[],
            items: [
                {
                  headerImage:{},
                  dropdownHtml:`<p><strong>Question #3 (Drop-Down Cloze):</strong> The client is most likely experiencing a #dropdown1# which is the cause of the PE based on the risk factor: #dropdown2#.</p>`,
                  dropdowns:{
                    dropdown1:{values:["Air embolism", "Fat embolism", "Thromboembolism", "Amniotic fluid embolism", "Foreign material embolism"],correctValue: "Thromboembolism",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    dropdown2:{values:["Obesity", "Decreased mobility", "Enoxaparin administration", "Hx of femur fracture", "Prolonged surgical procedure"],correctValue: "Decreased mobility",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> The client is elderly and most likely has impaired mobility due to the surgical procedure that has taken place. Therefore, the client is most likely experiencing a thromboembolism related to decreased mobility from his prolonged bedrest. Although long bone fractures, such as those of the femur, and repairs of those fractures increase the risk for fat embolism, this is not as likely to occur two days postoperatively. There is no indication in the scenario that the client would have either of the other types of embolism or that the client is obese. Enoxaparin use should decrease the risk of thromboembolism, not increase it.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
        },
        group4: {
            id: "group4",
            type: "dropdown",
            placeholder_id: "group4_placeholder",
            commonDropdownOptions:["1292","2764","6080","1672","5320","4788","1520","1216","3040","1140","1368","1064"],
            items: [
                {
                  headerImage:{},
                  dropdownHtml:`<p><strong>Question #4 Drag-and-drop Cloze:</strong> Using the heparin protocol described, complete the table with the appropriate heparin dosages for this client who weighs 76 kg using the collected client information.</p>
                  <p>The PN calculates the following doses to be administered to the client:</p>
                    <div class="pageavoid" id="t0065">
                    <table class="tbody" id="TABC00021Xt0065"><tbody><tr>
                    <td class="tb">Initial bolus (units)</td><td class="tb">#dropdown1#</td></tr>
                    <tr><td class="tb">Initial infusion (units/hr)</td><td class="tb">#dropdown2#</td></tr>
                    <tr><td class="tb">6 hour PTT result of 63 seconds: Infusion rate (units/hr)</td><td class="tb">#dropdown3#</td></tr>
                    <tr><td class="tb">12 hour PTT result of 144 seconds: Infusion rate (units/hr)</td><td class="tb">#dropdown4#</td></tr>
                    <tr><td class="tb">18 hour PTT result of 109 seconds: Infusion rate (units/hr)</td><td class="tb">#dropdown5#</td></tr>
                    </tbody></table></div>`,
                  dropdowns:{
                    dropdown1:{values:[],correctValue: "6080",dropdownlabel:"Select an heparin dosage", useCommonOptions:"true"},
                    dropdown2:{values:[],correctValue: "1368",dropdownlabel:"Select an heparin dosage", useCommonOptions:"true"},
                    dropdown3:{values:[],correctValue: "1520",dropdownlabel:"Select an heparin dosage", useCommonOptions:"true"},
                    dropdown4:{values:[],correctValue: "1292",dropdownlabel:"Select an heparin dosage", useCommonOptions:"true"},
                    dropdown5:{values:[],correctValue: "1140",dropdownlabel:"Select an heparin dosage", useCommonOptions:"true"},
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> <p>#1: 80 units x 76 kg = 6080 units/hr</p><p>#1: 18 units x 76 kg = 1368 units/hr</p><p>#1: 20 units x 76 kg = 1520 units/hr</p><p>#1: 17 units x 76 kg = 1292 units/hr</p><p>#1: 15 units x 76 kg = 1140 units/hr</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
        },
        group5: {
            id: "group5",
            type: "dropdown",
            placeholder_id: "group5_placeholder",
            commonDropdownOptions:["Skeletal muscle relaxant","Anticoagulant","Therapeutic analgesic adjunct","Laxative","Nonsteroidal anti-inflammatory agent","Opioid analgesic"],
            items: [
                {
                  headerImage:{},
                  dropdownHtml:`<p><strong>Question #5 (Drop-Down Table):</strong> Complete the following table by choosing the medication classification for each medication ordered for the client to be included in the client teaching.</p>
                  <div  class="pageavoid" id="t0075"><table class="tbody" id="TABC00021Xt0075"><tbody>
                    <tr><td class="tb">Medication Name</td><td class="tb">Therapeutic Drug Classification</td></tr>
                    <tr><td class="tb">Docusate sodium</td><td class="tb">#dropdown1#</td></tr>
                    <tr><td class="tb">Rivaroxaban</td><td class="tb">#dropdown2#</td></tr>
                    <tr><td class="tb">Oxycodone</td><td class="tb">#dropdown3#</td></tr>
                    <tr><td class="tb">Gabapentin</td><td class="tb">#dropdown4#</td></tr>
                    <tr><td class="tb">Celecoxib</td><td class="tb">#dropdown5#</td></tr>
                    </tbody></table></div>`,
                  dropdowns:{
                    dropdown1:{values:[],correctValue: "Laxative",dropdownlabel:"Select Therapeutic Drug Classifications", useCommonOptions:"true"},
                    dropdown2:{values:[],correctValue: "Anticoagulant",dropdownlabel:"Select Therapeutic Drug Classifications", useCommonOptions:"true"},
                    dropdown3:{values:[],correctValue: "Opioid analgesic",dropdownlabel:"Select Therapeutic Drug Classifications", useCommonOptions:"true"},
                    dropdown4:{values:[],correctValue: "Therapeutic analgesic adjunct",dropdownlabel:"Select Therapeutic Drug Classifications", useCommonOptions:"true"},
                    dropdown5:{values:[],correctValue: "Nonsteroidal anti-inflammatory agent",dropdownlabel:"Select Therapeutic Drug Classifications", useCommonOptions:"true"},
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
        },
        group6: {
            id: "group6",
            type: "dropdown",
            placeholder_id: "group6_placeholder",
            commonDropdownOptions:[],
            items: [
                {
                  headerImage:{},
                  dropdownHtml:`<p><strong>Question #6 (Drop-Down Rationale):</strong> Effective dosing of pancreatic enzyme replacement therapy is determined by observing the client’s #dropdown1#. If therapy is sufficient, then the nurse will see it #dropdown2#.</p>`,
                  dropdowns:{
                    dropdown1:{values:["Urine", "Feces", "Emesis", "Sweat", "Saliva", "Sputum"],correctValue: "Feces",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    dropdown2:{values:["Contains glucose", "Contains protein", "Sink", "Float", "Increase","Decrease"],correctValue: "Sink",dropdownlabel:"Select an option", useCommonOptions:"false"},
                    
                  },
                  dropdownPlacement:"inline",//newline
                  correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> Feces from a client receiving adequate PERT will sink to the bottom of the toilet. Feces containing fat will float to the surface of the water in the toilet. Undigested fat in the stool indicates insufficient PERT in clients with CF. This is an easily observable indication of therapeutic medication dosing for clients. PERT will not affect the other body fluids mentioned.</p>`,
                  partialFeedback: `You have one or more incorrect answers.`,
                  incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
        },
        group7: {
          id: "group7",
          type: "reflective_writing", //Fill-in-the-Blank
          placeholder_id: "group7_placeholder",
          items: [
            {
                title: `<p><strong>Notes</strong></p>`,
                feedback: ``,
            }
          ],
          optionStyleType: "st-decimal",
          itemSeperator: "true",
        },
    },
};