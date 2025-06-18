//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1749828047824",//statedata identifier to store data in localstorage.
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
                clozeHtml:`<p>A client has an order for hydromorphone IV push 1 mg every 3 hours. The drug is available as 4 mg/mL per vial. The nurse administers #cloze1# mL of hydromorphone for one dose. (Fill in the blank.)</p>`,
                clozes:{
                  cloze1:{correctValue: "0.25", clozelabel:"fill in the blank"},
                },
                clozePlacement:"inline",//newline
              },
            ],
            correctFeedback: `<p>All of your answers are correct.<p><p><strong>Rationale</strong></p>
            <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>1</mn><mo>&#xA0;</mo><mi>mg</mi></mrow><mrow><mn>4</mn><mo>&#xA0;</mo><mi>mg</mi><mo>&#x00D7;</mo><mn>1</mn></mrow></mfrac><mo>&#xA0;</mo><mi>mL</mi><mo>=</mo><mn>0.25</mn><mo>&#xA0;</mo><mi>mL</mi></mrow></math></p>`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "",
            itemSeperator: "false",
        }, 
        group2: {
            id: "group2",
            type: "cloze", //Fill-in-the-Blank
            placeholder_id: "group2_placeholder",
            items: [
              {
                headerImage:{},
                clozeHtml:`<p>A picture of chromosomes in the nucleus of a cell is a/an #cloze1# .</p>
                <p>The health care provider (HCP) prescribes 3000 mL of 5% dextrose (D5W) to run over a 24-hour period. The drop factor is 10 gtt/mL. There are 300 mL remaining at 09:00. What time would the PN anticipate the next bag of D5W solution to be hung? Round to the nearest half hour. (Fill in the blank.)</p>
                <p>The next bag of D5W solution will be hung at #cloze1#.</p>`,
                clozes:{
                  cloze1:{correctValue: "The next bag of D5W solution will be hung at 11:30", clozelabel:"fill in the blank"},
                },
                clozePlacement:"inline",//newline
              },
            ],
            correctFeedback: `<p>All of your answers are correct.<p><p><strong>Rationale</strong></p>
            <p>3000 mL + 24h = 125 mL/h</p> <p>300 mL + 125 mL/h = 2.4h</p> <p>0.4 h × 60 minutes = 24 minutes</p> <p>9:00 + 2 h 24 min = 11:24 AM</p>`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "",
            itemSeperator: "false",
        }, 
        group3: {
            id: "group3",
            type: "dropdown",
            placeholder_id: "group3_placeholder",
            commonDropdownOptions:["Normal", "Acidic", "Alkalotic"],
            items: [
                {
                    headerImage:{},
                    dropdownHtml:`<span>7.31 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Acidic",dropdownlabel:"Select the pH condition", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>7.47 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Alkalotic",dropdownlabel:"Select the pH condition", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>7.36 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Normal",dropdownlabel:"Select the pH condition", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
            ],
            correctFeedback: `All of your answers are correct.`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "st-decimal",
            itemSeperator: "false"
        },  
        group4: {
            id: "group4",
            type: "dropdown",
            placeholder_id: "group4_placeholder",
            commonDropdownOptions:["Hypoventilating: retaining CO2", "Hyperventilating: blowing off CO2", "Normal ventilation"],
            items: [
                {
                    headerImage:{},
                    dropdownHtml:`<span>pCO2 = 42 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Normal ventilation",dropdownlabel:"Select ventilation status", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>pCO2 = 33 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Hyperventilating: blowing off CO2",dropdownlabel:"Select ventilation status", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>pCO2 = 55 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Hypoventilating: retaining CO2",dropdownlabel:"Select ventilation status", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
            ],
            correctFeedback: `All of your answers are correct.`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "st-decimal",
            itemSeperator: "false"
        },
        group5: {
            id: "group5",
            type: "dropdown",
            placeholder_id: "group5_placeholder",
            commonDropdownOptions:["Normal", "Acidosis", "Alkalosis"],
            items: [
                {
                    headerImage:{},
                    dropdownHtml:`<span>HCO3 = 20 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Acidosis",dropdownlabel:"Select Acid-base status from reading", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>HCO3 = 33 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Alkalosis",dropdownlabel:"Select Acid-base status from reading", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>HCO3 = 21 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Normal",dropdownlabel:"Select Acid-base status from reading", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
            ],
            correctFeedback: `All of your answers are correct.`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "st-decimal",
            itemSeperator: "false"
        },
        group6: {
            id: "group6",
            type: "dropdown",
            placeholder_id: "group6_placeholder",
            commonDropdownOptions:["a normal ABG reading", "uncompensated metabolic alkalosis", "uncompensated metabolic acidosis", "uncompensated respiratory acidosis", "partially compensated respiratory acidosis"],
            items: [
              { 
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.32</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>50</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>25</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "uncompensated respiratory acidosis",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = acidosis, pCO2 = acidic, HCO3 = normal.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              },
              { 
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.28</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>35</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>18</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "uncompensated metabolic acidosis",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = acidosis, pCO2 = normal, HCO3 = acidic.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              },
              {
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.43</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>40</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>24</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "a normal ABG reading",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = normal, pCO2 = normal, HCO3 = normal.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              },
              {
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.56</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>44</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>38</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "uncompensated metabolic alkalosis",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = alkalosis, pCO2 = normal, HCO3 = alkalotic.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              },
              {
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.33</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>50</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>29</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "partially compensated respiratory acidosis",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = acidosis, pCO2 = acidic, HCO3= alkalotic.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "st-decimal",
            itemSeperator: "true",
        }
    },
};