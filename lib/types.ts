export interface Income {
  id: number;
  income_title: string;
  hourly_pay: number;
  tax_code: number;
  hours_entries: {
    date: Date,
    regular: number,
    overtime: number
  }
}


