/* eslint-disable */ 
import { jsPDF } from 'jspdf';

const generatePDF = (loanDetails) => {
  console.log(loanDetails);
  const doc = new jsPDF();
  doc.text('Loan Application Details', 10, 10);

  doc.text(`Customer name: ${loanDetails.customer_name}`, 10, 30);
  doc.text(`Loan amount: $${loanDetails.loan_amount}`, 10, 40);
  doc.text(`Application Date: ${loanDetails.created_at}`, 10, 50);
  doc.text(`Purpose: ${loanDetails.purpose}`, 10, 60);
  doc.text(`Repayment preference: ${loanDetails.repayment_preferences}`, 10, 70);

  doc.text('Current review details', 10, 90);
  doc.text(`Last review date: ${loanDetails.updated_at}`, 10, 100);
  doc.text(`Status: ${loanDetails.status}`, 10, 110);
  doc.text(`Details: ${loanDetails.details}`, 10, 120);
  doc.text(`Amount to pay back: ${loanDetails.amount_to_pay}`, 10, 130);
  doc.text(`Repayment Schedule: ${loanDetails.repayment_schedule}`, 10, 140);

  doc.save('LoanApplicationDetails.pdf');
};

export default generatePDF;
