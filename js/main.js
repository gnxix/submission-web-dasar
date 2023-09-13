const data = [
  {
    sectionName: "EDUCATION",
    listItems: [
      "Nursing Assistant - SMK Negeri 6 Manado",
      "S1 Informatics Engineering - Catholic University of De La Salle Manado",
    ],
  },
  {
    sectionName: "CAREER",
    listItems: [
      "Student at Unika De La Salle Manado",
      "Multimedia Lab. Assistant at Unika De La Salle Manado",
      "Substitute Teacher at KodeKiddo Manado",
    ],
  },
  {
    sectionName: "INTEREST SKILLS",
    listItems: ["Web Development", "Design UI/UX"],
  },
];

function renderData() {
  const dataContainer = document.getElementById("allCard");

  data.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section", "card");

    const sectionHeader = document.createElement("h3");
    sectionHeader.textContent = section.sectionName;

    const sectionList = document.createElement("ul");
    section.listItems.forEach((itemText) => {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      sectionList.appendChild(listItem);
    });

    sectionDiv.appendChild(sectionHeader);
    sectionDiv.appendChild(sectionList);

    dataContainer.appendChild(sectionDiv);
  });
}

renderData();
