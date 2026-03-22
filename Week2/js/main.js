const singers = [
  {
    name: "Rob Thomas",
    dob: "02/14/1972",
    bestSongs: "Smooth, Lonely No More"
  },
  {
    name: "Nickelback (Chad Kroeger)",
    dob: "11/15/1974",
    bestSongs: "Photograph, How You Remind Me"
  },
  {
    name: "Linkin Park (Chester Bennington)",
    dob: "03/20/1976",
    bestSongs: "Numb, In the End"
  },
  {
    name: "Fort Minor (Mike Shinoda)",
    dob: "02/11/1977",
    bestSongs: "Remember the Name, Where'd You Go"
  },
  {
    name: "Imagine Dragons (Dan Reynolds)",
    dob: "07/14/1987",
    bestSongs: "Radioactive, Believer"
  }
];

// Get the table body element by its ID to insert rows of singer data
const tableBody = document.getElementById("singerTableBody");

// Loop through each singer in the singers array and create a table row for each, then append it to the table body
singers.forEach(function(singer) {
  let row = `
    <tr>
      <td>${singer.name}</td>
      <td>${singer.dob}</td>
      <td>${singer.bestSongs}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
});