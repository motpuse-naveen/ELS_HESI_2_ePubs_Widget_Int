//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1750102423299",//statedata identifier to store data in localstorage.
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
                clozeHtml:`<p>A client has an order for hydromorphone intravenous (IV) push 1 mg every 3 hours. The drug is available as 4 mg/mL per vial. The RN administers #cloze1# mL of hydromorphone for one dose. (Fill in the blank.)</p>`,
                clozes:{
                  cloze1:{correctValue: "0.25", clozelabel:"fill in the blank"},
                },
                clozePlacement:"inline",//newline
              },
            ],
            correctFeedback: `<p>All of your answers are correct.</p><p><strong>Rationale</strong></p>
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
                clozeHtml:`<p>A client is receiving an infusion of dobutamine hydrochloride. The order reads: Infuse dobutamine IV at 5 mcg/kg/min available in 500 mg in 250 mL D5W. The client weighs 65 kg. Calculate the flow rate in mL/hr.</p><p>#cloze1# mL/hr</p>`,
                clozes:{
                  cloze1:{correctValue: "9.75", clozelabel:"fill in the blank"},
                },
                clozePlacement:"inline",//newline
              },
            ],
            correctFeedback: `<p>Your answers is correct.</p><p><strong>Rationale</strong></p>
            <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>500</mn><mo>&#xA0;</mo><mi>mg</mi><mo>=</mo><mn>500000</mn><mo>&#xA0;</mo><mi>mcg</mi><mo>/</mo><mn>250</mn><mo>&#xA0;</mo><mi>mL</mi><mo>=</mo><mn>2000</mn><mo>&#xA0;</mo><mi>mcg</mi><mo>/</mo><mn>1</mn><mo>&#xA0;</mo><mi>mL</mi></mrow></math></p> 
            <p><math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mrow><mfrac><mrow><mn>5</mn><mo>&#xA0;</mo><mtext>mcg</mtext><mo>&#xD7;</mo><mn>65</mn><mo>&#xA0;</mo><mtext>kg</mtext><mo>&#xD7;</mo><mn>60</mn><mo>&#xA0;</mo><mtext>min</mtext></mrow><mrow><mn>2000</mn><mo>&#xA0;</mo><mtext>mcg / 1 mL</mtext></mrow></mfrac><mo>=</mo><mn>9.75</mn><mo>&#xA0;</mo><mtext>mL/hr</mtext></mrow></math></p>`,
            partialFeedback: `You have one or more incorrect answers.`,
            incorrectFeedback: `Your answers are incorrect.`,
            optionStyleType: "",
            itemSeperator: "false",
        }, 
        group3: {
            id: "group3",
            type: "dropdown",
            placeholder_id: "group3_placeholder",
            alignment: "left",
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
            alignment: "left",
            commonDropdownOptions:["Hypoventilating: retaining CO2", "Hyperventilating: blowing off CO2", "Normal ventilation"],
            items: [
                {
                    headerImage:{},
                    dropdownHtml:`<span>pCO<sub>2</sub> = 42 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Normal ventilation",dropdownlabel:"Select ventilation status", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>pCO<sub>2</sub> = 33 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Hyperventilating: blowing off CO2",dropdownlabel:"Select ventilation status", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>pCO<sub>2</sub> = 55 #dropdown1#</span>`,
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
            alignment: "left",
            commonDropdownOptions:["Normal", "Acidosis", "Alkalosis"],
            items: [
                {
                    headerImage:{},
                    dropdownHtml:`<span>HCO<sub>3</sub> = 20 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Acidosis",dropdownlabel:"Select Acid-base status from reading", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>HCO<sub>3</sub> = 33 #dropdown1#</span>`,
                    dropdowns:{
                      dropdown1:{values:[],correctValue: "Alkalosis",dropdownlabel:"Select Acid-base status from reading", useCommonOptions:"true"},
                    },
                    dropdownPlacement:"inline",//inline
                  },
                  {
                    headerImage:{},
                    dropdownHtml:`<span>HCO<sub>3</sub> = 21 #dropdown1#</span>`,
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
            alignment: "left",
            commonDropdownOptions:["normal ABG reading", "uncompensated metabolic alkalosis", "uncompensated metabolic acidosis", "uncompensated respiratory acidosis", "partially compensated respiratory acidosis"],
            items: [
              { 
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.32</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>50</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>25</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "uncompensated respiratory acidosis",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = acidosis, pCO<sub>2</sub> = acidic, HCO<sub>3</sub> = normal. This client has uncompensated respiratory acidosis.</p>`,
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
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = acidosis, pCO<sub>2</sub> = normal, HCO<sub>3</sub> = acidic. This client has uncompensated metabolic acidosis.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              },
              {
                headerImage:{},
                dropdownHtml:`<ul class="bullets"><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>pH</mi><mo>=</mo><mn>7.43</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>pCO</mi><mn>2</mn></msub><mo>=</mo><mn>40</mn></mrow></math></li><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>HCO</mi><mn>3</mn></msub><mo>=</mo><mn>24</mn></mrow></math></li></ul><p>This client has #dropdown1#.</p>`,
                dropdowns:{
                  dropdown1:{values:[],correctValue: "normal ABG reading",dropdownlabel:"Select Arterial Blood Gas Interpretation", useCommonOptions:"true"},
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = normal, pCO<sub>2</sub> = normal, HCO<sub>3</sub> = normal. This client has normal ABG reading.</p>`,
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
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = alkalosis, pCO<sub>2</sub> = normal, HCO<sub>3</sub> = alkalotic. This client has uncompensated metabolic alkalosis.</p>`,
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
                correctFeedback: `<p>Your answer is correct.</p><p><strong>Rationale:</strong> pH = acidosis, pCO<sub>2</sub> = acidic, HCO<sub>3</sub>= alkalotic. This client has partially compensated respiratory acidosis.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "st-decimal",
            itemSeperator: "true",
        }
    },
};