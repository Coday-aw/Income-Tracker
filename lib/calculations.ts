import { Income } from "./types";

// Formatting functions
export const formatCurrency = (
  amount: number,
  locale: string = "sv-SE"
): string => {
  return new Intl.NumberFormat(locale).format(Math.round(amount));
};

// Formatting functions
export const formatHours = (hours: number): string => {
  return hours.toFixed(1);
};

// function to calculate total hours
export const calculateTotalHours = (income: Income): number => {
  if (!income?.hours_entries) return 0;

  return income.hours_entries.reduce((acc, entry) => {
    return acc + entry.regular + entry.overtime;
  }, 0);
};
// function to calculate regular hours
export const calculateRegularHours = (income: Income): number => {
  if (!income?.hours_entries) return 0;

  return income.hours_entries.reduce((acc, entry) => {
    return acc + entry.regular;
  }, 0);
};

// function to calculate overtime hours
export const calculateOvertimeHours = (income: Income): number => {
  if (!income?.hours_entries) return 0;

  return income.hours_entries.reduce((acc, entry) => {
    return acc + entry.overtime;
  }, 0);
};

// function to calculate overtime pay
export const calculateOvertimePay = (income: Income): number => {
  if (!income?.hours_entries) return 0;

  return income.hours_entries.reduce((acc, entry) => {
    const overtimeRate =
      income.hourlyPay * (1 + entry.overtime_compensation / 100);
    const overtimePay = entry.overtime * overtimeRate;
    return acc + overtimePay;
  }, 0);
};

// function to calculate regular pay
export const calculateRegularPay = (income: Income): number => {
  if (!income?.hours_entries) return 0;

  return income.hours_entries.reduce((acc, entry) => {
    const regularPay = entry.regular * income.hourlyPay;
    return acc + regularPay;
  }, 0);
};

// function to calculate gross salary
export const calculateGrossSalary = (income: Income): number => {
  if (!income) return 0;

  const regularPay = calculateRegularPay(income);
  const overtimePay = calculateOvertimePay(income);

  return regularPay + overtimePay;
};

// function to calculate net salary
export const calculateNetSalary = (income: Income): number => {
  if (!income) return 0;

  const grossSalary = calculateGrossSalary(income);
  const taxRate = income.taxCode / 100;

  return grossSalary - grossSalary * taxRate;
};

// Get detailed earnings breakdown
export const getEarningsBreakdown = (income: Income) => {
  if (!income) {
    return {
      regularPay: 0,
      overtimePay: 0,
      grossSalary: 0,
      netSalary: 0,
      taxAmount: 0,
    };
  }

  // Calculate earnings
  const regularPay = calculateRegularPay(income);
  const overtimePay = calculateOvertimePay(income);
  const grossSalary = regularPay + overtimePay;
  const taxAmount = grossSalary * (income.taxCode / 100);
  const netSalary = grossSalary - taxAmount;

  return {
    regularPay,
    overtimePay,
    grossSalary,
    netSalary,
    taxAmount,
  };
};
