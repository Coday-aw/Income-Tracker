export interface Hours_entries {
  date: string;
  regular: number;
  overtime: number;
  overtime_compensation: number;
}

export interface Income {
  _id: string;
  incomeTitle: string;
  hourlyPay: number;
  taxCode: number;
  hours_entries: Hours_entries[];
}
