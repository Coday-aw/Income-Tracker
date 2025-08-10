# Overtime Compensation Implementation

## How It Works

The new overtime compensation system allows each hours entry to have its own overtime compensation percentage (0-100).

### Formula
- **Regular Pay**: `regular_hours * hourly_pay`
- **Overtime Rate**: `hourly_pay * (1 + overtime_compensation / 100)`
- **Overtime Pay**: `overtime_hours * overtime_rate`

### Example

Given:
- Hourly Pay: 200 SEK
- Hours Entry 1: 8 regular hours, 2 overtime hours, 50% overtime compensation
- Hours Entry 2: 8 regular hours, 3 overtime hours, 75% overtime compensation

**Calculations:**

Entry 1:
- Regular Pay: 8 * 200 = 1,600 SEK
- Overtime Rate: 200 * (1 + 50/100) = 200 * 1.5 = 300 SEK/hour
- Overtime Pay: 2 * 300 = 600 SEK

Entry 2:
- Regular Pay: 8 * 200 = 1,600 SEK
- Overtime Rate: 200 * (1 + 75/100) = 200 * 1.75 = 350 SEK/hour
- Overtime Pay: 3 * 350 = 1,050 SEK

**Total:**
- Total Regular Pay: 1,600 + 1,600 = 3,200 SEK
- Total Overtime Pay: 600 + 1,050 = 1,650 SEK
- **Gross Salary: 3,200 + 1,650 = 4,850 SEK**

## Functions Available

- `calculateRegularPay(income)`: Total regular pay
- `calculateOvertimePay(income)`: Total overtime pay with individual compensation rates
- `calculateGrossSalary(income)`: Total gross salary
- `calculateNetSalary(income)`: Net salary after taxes
- `getEarningsBreakdown(income)`: Complete breakdown of all earnings
