let currentSection = 1;

function showSection(sectionNumber) {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";

  document.getElementById(`section${sectionNumber}`).style.display = "flex";
  currentSection = sectionNumber;
}

function showNext() {
  if (currentSection < 2) {
    showSection(currentSection + 1);
  }
}

function showPrev() {
  if (currentSection > 1) {
    showSection(currentSection - 1);
  }
}
