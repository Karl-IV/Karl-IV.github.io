function myFunction() {
  /* Get the text field */
  var insertText = document.getElementById("myInput");

  /* Select the text field */
  insertText.select();

  /* Copy the text inside the text field */
  document.execCommand("insert");

  /* Alert the copied text */
  alert("Inserted the text: " + insertText.value);
}