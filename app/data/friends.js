// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
  "name":"Rachel Green",
  "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/JenniferAniston08TIFF.jpg/195px-JenniferAniston08TIFF.jpg",
  "scores":[5,1,4,4,5,1,2,5,4,1]
  },
  {
    "name":"Monica Geller",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/CourteneyCoxFeb09.jpg/195px-CourteneyCoxFeb09.jpg",
    "scores":[3,3,3,3,3,3,3,3,3,3]
    },
  {
    "name":"Phoebe Buffay",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lisa_Kudrow_2.jpg/195px-Lisa_Kudrow_2.jpg",
    "scores":[4,4,4,4,4,4,4,4,4,4]
  },
  {
    "name":"Joey Tribbiani",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/X_217c5312.jpg/195px-X_217c5312.jpg",
    "scores":[5,5,5,5,5,5,5,5,5,5]
  },
   {
    "name":"Chandler Bing",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Matthew_Perry_2013_lighting_and_color_corrected.jpg/195px-Matthew_Perry_2013_lighting_and_color_corrected.jpg",
    "scores":[2,2,2,2,2,2,2,2,2,2]
  },
  {
    "name":"Ross Geller",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/David_Schwimmer_2011.jpg/195px-David_Schwimmer_2011.jpg",
    "scores":[1,1,1,1,1,1,1,1,1,1]
  }
 

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
