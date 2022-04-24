import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
// define a generatePDF function that accepts a assistants argument
const generatePDF = assistants => {
  // initialize jsPDF
  const doc = new jsPDF();
  // define the columns we want and their titles
  const tableColumn = ["Name", "Age", "Gender", "Address", "Phone", "Email"];
  // define an empty array of rows
  const tableRows = [];

  // for each assistant pass all its data into an array

  assistants.forEach(assistant => {
    const assistantData = [
      assistant.name,
      assistant.age,
      assistant.gender,
      assistant.address,
      assistant.phone,
      assistant.email,
      assistant.birthday,
      // called date-fns to format the date on the assistant
      format(new Date(assistant.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(assistantData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // assistant title. and margin-top + margin-left
  doc.text("Closed assistants within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};



export default generatePDF;