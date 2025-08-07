interface hours_entries {
  date: Date;
  regular: number;
  overtime: number;
}

export interface Income {
  _id: string;
  incomeTitle: string;
  hourlyPay: number;
  taxCode: number;
  hours_entries: hours_entries[];
}
