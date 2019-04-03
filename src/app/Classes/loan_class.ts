export class loan
{
  constructor(

  public loan_amount:number,
  public fk_employee_email:string,
  public loan_issued_date:Date,
  public last_installment_date:Date,
  public loan_reason:string,
  public loan_months:number)
  {}
}
