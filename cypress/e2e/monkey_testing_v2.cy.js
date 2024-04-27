describe("Los estudiantes under monkeys", function () {
  it("visits los estudiantes and survives monkeys", function () {
    cy.visit("https://losestudiantes.co");
    cy.wait(1000);
    //Set parametric variables
    var numberOfActions = 10
    var actions = ["click_link", "click_button", "type", "select"]
    //Execute the monkey
    randomEvent(numberOfActions, actions);
  });
});

function randomEvent(actionsLeft, actions) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  if (actionsLeft > 0) {
    //Choose random action
    const action = actions[getRandomInt(0, actions.length)];
    //Execute random action
    switch (action) {
      //Click on link
      case "click_link":
        cy.get("a").then(($links) => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if (!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({ force: true });
            actionsLeft--;
          }
          cy.wait(1000);
          randomEvent(actionsLeft, actions);
        });
        break;
      //Click on button
      case "click_button":
        cy.get("button").then(($buttons) => {
          var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
          if (!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({ force: true });
            actionsLeft--;
          }
          cy.wait(1000);
          randomEvent(actionsLeft, actions);
        });
        break;
      //Type on input field
      case "type":
        cy.get("input").then(($inputs) => {
          var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
          if (!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type("Random Text", { force: true });
            actionsLeft--;
          }
          cy.wait(1000);
          randomEvent(actionsLeft, actions);
        });
        break;
      //Select a random option
      case "select":
        cy.get("select").then(($selects) => {
          var randomSelect = $selects.get(getRandomInt(0, $selects.length));
          if (!Cypress.dom.isHidden(randomSelect)) {
            cy.wrap(randomSelect)
              .find("option")
              .eq(getRandomInt(0, randomSelect.options.length))
              .then((option) => {
                cy.wrap(randomSelect).select(option.val(), { force: true });
                actionsLeft--;
              });
          }
          cy.wait(1000);
          randomEvent(actionsLeft, actions);
        });
        break;
    }
  }
}
