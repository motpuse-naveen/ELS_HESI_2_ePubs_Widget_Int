//optionstyletypes ---- "st-upper-alpha", "st-lower-alpha", "st-upper-roman", "st-lower-roman", "st-decimal", "st-none"
const questions_data = {
    sharedProperties: {
      maxWidth: "960px", //"100%", "90%", "760px", "1024px"
      alignment: "center", //"center", "left"
      pageStateIdentifier:"Id1749826416193",//statedata identifier to store data in localstorage.
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
                dropdownHtml:`<p id="p1235" class="b1text"><strong>Question:</strong> Complete the following sentence by choosing from the options.</p>
                <p id="p1240" class="b1text">The nurse would advise the client complete a(n) #dropdown1# to officially document all wishes for end-of-life care to be implemented once the client is no longer able to make decisions. The client will also be advised to appoint a(n) #dropdown2# to carry out the client’s medical wishes.</p>`,
                dropdowns:{
                  dropdown1:{values:["Death with dignity consent", "Informed consent", "Last will and testament", "Advance directive"],correctValue: "Advance directive",dropdownlabel:"Select the option", useCommonOptions:"false"},
                  dropdown2:{values:["Attorney-in-fact", "Power of attorney", "Health care proxy", "Estate planner"],correctValue: "Health care proxy",dropdownlabel:"Select the option", useCommonOptions:"false"}
                },
                dropdownPlacement:"inline",//newline
                correctFeedback: `<p>Your answer is correct.</p>
                <p><strong>Rationale 1:</strong> An advance directive is a legal document that details a client’s wishes for health care to be instated if/when said client becomes incapacitated or unable to make decisions independently. Death with dignity consent is used for physician-assisted suicides in states where this is allowed. Informed consent is required before all invasive procedures but does not pertain to this situation. A last will and testament discusses how a client’s possessions will be dispersed but does not address medical issues.</p>
                <p><strong>Rationale 2:</strong> A health care proxy is the appropriate term for the individual whom a client appoints to make health care decisions for the client if/when the client becomes unable to make decisions for themselves. The proxy should understand the client’s wishes for end-of-life care and be willing to see that those plans are carried out accordingly. This person is only entitled to make health care decisions and is not involved in financial decisions or estate planning. An attorney-in-fact is a person who assumes responsibility for making financial, legal, and business matter decisions for the client and is another term for someone with general power of attorney. An estate planner helps designating who will handle a client’s assets and responsibilities after death.</p>`,
                partialFeedback: `You have one or more incorrect answers.`,
                incorrectFeedback: `Your answer is incorrect.`
              }
            ],
            optionStyleType: "",
            itemSeperator: "true",
          },
    },
};