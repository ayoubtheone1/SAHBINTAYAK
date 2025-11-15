var question =  document.getElementById('OSTORA');
function getAnswer() {
if (question.value == 'AH') { 
   window.location.href = "final.html";
} else  if (question.value == 'LA') {
   window.location.href = "HOREER.HTML"; 
} else  if (question.value === '') {
    // valeur vide → ne rien faire
    return;
}
}