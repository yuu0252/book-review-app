import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Signup } from "./Signup";

test("if email and password exists", () => {
  render(<Signup />, { wrapper: BrowserRouter });
  const name = screen.getByLabelText("name");
  expect(name).toBeInTheDocument();
  const email = screen.getByLabelText("email");
  expect(email).toBeInTheDocument();
  const password = screen.getByLabelText("password");
  expect(password).toBeInTheDocument();
  const submit = screen.getByLabelText("submit");
  expect(submit).toBeInTheDocument();
});
