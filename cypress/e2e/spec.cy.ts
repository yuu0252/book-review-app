describe("template spec", () => {
  it("login success", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("sample@sample.com");
    cy.get('[name="password"]').type("samplecode");
    cy.get('[type="submit"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("wrong email", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("samplesample.com");
    cy.get('[name="password"]').type("samplecode");
    cy.get('[type="submit"]').click();
    cy.contains("無効なメールアドレスです。");
  });

  it("wrong password", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("sample@sample.com");
    cy.get('[name="password"]').type("sample");
    cy.get('[type="submit"]').click();
    cy.contains(
      "パスワードは8文字以上必要です。(. _ % + -)の記号が入力可能です。"
    );
  });

  it("login failed", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("sample@sample.com");
    cy.get('[name="password"]').type("wrongcode");
    cy.get('[type="submit"]').click();
    cy.contains("ログインに失敗しました。");
    cy.url().should("eq", "http://localhost:3000/login");
  });
});
