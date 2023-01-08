const testBootcamp = "dnfs";
const devFirstName = "Carl";
const devLastName = "Sharpson";

describe("functional tests", () => {
  const BootcampApp = {
    visit: () => cy.visit("http://localhost:3000"),
    devForm: () => cy.get('[id="addDeveloperForm"]'),
    addDevBtn: () => cy.get('[id="addDeveloperBtn"]'),
    developerGallery: () => cy.get('[class="gallery"]'),
    addNewDeveloper: (firstName, lastName) => {
      const firstInput = BootcampApp.devForm().find(
        ".addDeveloperFirstNameInput"
      );
      firstInput.type(firstName);
      if (lastName) {
        const secondInput = BootcampApp.devForm().find(
          ".addDeveloperLastNameInput"
        );
        secondInput.type(lastName);
      }
      BootcampApp.addDevBtn().click();
      return;
    },
    jsList: () => cy.get(".--dev").first(),
    filterSelect: (filterValue) =>
      cy.get(".selectBootcamp").select(filterValue),
  };

  beforeEach(() => {
    BootcampApp.visit();
  });

  it("loads the site", () => {
    BootcampApp.visit();
  });
  it("check if form exists", () => {
    BootcampApp.devForm().should("exist");
  });

  it("creates a new developer", () => {
    cy.get(".--dev")
      .first()
      .children()
      .its("length")
      .then((number) => {
        BootcampApp.addNewDeveloper(devFirstName, devLastName);
        cy.wait(500);
        cy.get(".--dev")
          .first()
          .children()
          .its("length")
          .should("be.gt", number);
      });
  });

  it("Error message displays when not both input fields are filled and form is submitted", () => {
    BootcampApp.addNewDeveloper("tester");
    cy.get(".errorMessage").should("exist");
  });

  it("check if filter works", () => {
    BootcampApp.filterSelect("dnfs");
    cy.wait(500);
    cy.get(".bootcamp").children(".cardList").its("length").should("eq", 2);
  });

  it("check if all bootcamp cards rendered", () => {
    BootcampApp.filterSelect("all");
    cy.wait(500);
    cy.get(".gallery").children(".bootcamp").its("length").should("eq", 3);
  });

  it("check if delete button is rendered after toggle developer item", () => {
    cy.get(".toggled").first().click();
    cy.wait(500);
    cy.get(".deleteBtn").should("exist");
  });

  it("check if developer is removed after delete button is clicked", () => {
    cy.get(".--dev")
      .first()
      .children()
      .its("length")
      .then((number) => {
        cy.get(".toggled").first().click();
        cy.wait(500);
        cy.get(".deleteBtn").click();
        cy.wait(500);
        cy.get(".--dev")
          .first()
          .children()
          .its("length")
          .should("be.lt", number);
      });
  });
});
