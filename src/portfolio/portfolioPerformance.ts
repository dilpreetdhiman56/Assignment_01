// Interface for the portfolio performance output
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange =
    ((currentValue - initialInvestment) / initialInvestment) * 100;

  // Map conditions to outcomes (instead of using if statements)
  const performanceSummary =
    percentageChange > 20
      ? "Portfolio gained significantly"
      : percentageChange >= 10
      ? "Portfolio gained moderately"
      : percentageChange > 0
      ? "Portfolio gained slightly"
      : percentageChange === 0
      ? "No change"
      : percentageChange <= -20
      ? "Portfolio lost significantly"
      : percentageChange <= -10
      ? "Portfolio lost moderately"
      : "Portfolio lost slightly";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}
