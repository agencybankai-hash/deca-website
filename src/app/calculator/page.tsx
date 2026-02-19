import type { Metadata } from "next";
import { CalculatorContent } from "./calculator-content";

export const metadata: Metadata = {
  title: "Window Cost Estimator | DECA Windows",
  description: "Calculate the estimated cost of your custom DECA windows. Adjust size, material, glazing, and more to see real-time pricing.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return <CalculatorContent />;
}
