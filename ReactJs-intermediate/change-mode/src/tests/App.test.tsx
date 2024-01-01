import React from "react";
import { render, screen } from "@testing-library/react";
// import { describe, it } from "node: test";
import Faq from "../components/Faq";
import { expect, it } from "vitest";

it('renders headline', () => {
    render(<Faq />);
    const headline = screen.getByText(/ini FAQ/i);
    expect(headline).toBeInTheDocument();

});