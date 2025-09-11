import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("should calculate correctly when there is a profit", () => {
    const result = calculatePortfolioPerformance(10000, 12000);

    expect(result.profitOrLoss).toBe(2000);
    expect(result.percentageChange).toBeCloseTo(20, 1);
    expect(result.performanceSummary).toBe("Portfolio gained moderately");
  });

  it("should calculate correctly when there is a loss", () => {
    const result = calculatePortfolioPerformance(10000, 8000);

    expect(result.profitOrLoss).toBe(-2000);
    expect(result.percentageChange).toBeCloseTo(-20, 1);
    expect(result.performanceSummary).toBe("Portfolio lost significantly");
  });

  it("should calculate correctly when there is no change", () => {
    const result = calculatePortfolioPerformance(10000, 10000);

    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe("No change");
  });

  it("should handle slight gain correctly", () => {
    const result = calculatePortfolioPerformance(10000, 10100);

    expect(result.profitOrLoss).toBe(100);
    expect(result.percentageChange).toBeCloseTo(1, 1);
    expect(result.performanceSummary).toBe("Portfolio gained slightly");
  });
});
