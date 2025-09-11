import express, { Express } from "express";
import {
  calculatePortfolioPerformance,
  findLargestHolding,
  assetAllocationPercentages,
  Asset
} from "./portfolio/portfolioPerformance";

const app: Express = express();
app.use(express.json());

interface HealthCheckResponse {
  status: string;
  uptime: number;
  timestamp: string;
  version: string;
}

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/api/v1/health", (req, res) => {
  const healthData: HealthCheckResponse = {
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };
  res.json(healthData);
});

// Portfolio performance endpoint
app.get("/api/v1/portfolio/performance", (req, res) => {
  const { initialInvestment, currentValue } = req.query;
  if (!initialInvestment || !currentValue) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  const result = calculatePortfolioPerformance(
    Number(initialInvestment),
    Number(currentValue)
  );
  res.json(result);
});

// Largest holding endpoint
app.post("/api/v1/portfolio/largest-holding", (req, res) => {
  const assets: Asset[] = req.body.assets || [];
  const result = findLargestHolding(assets);
  res.json(result);
});

// Asset allocation endpoint
app.post("/api/v1/portfolio/allocation", (req, res) => {
  const assets: Asset[] = req.body.assets || [];
  const result = assetAllocationPercentages(assets);
  res.json(result);
});

export default app;