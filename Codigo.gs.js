function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/16Uk4W9CXMtW2AWhm_yn_Wkm84AFVUyCzUJFrHxP0ofw/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    formObject.Nombre,
    formObject.Apellido,
    formObject.Matricula,
    formObject.Club,
    formObject.Telefono,
    formObject.Email

  ]);
}