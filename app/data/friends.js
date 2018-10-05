// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
  "name":"Christy Nix",
  "photo":"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0022/5351/brand.gif",
  "scores":[5,1,4,4,5,1,2,5,4,1]
  },
  {
    "name":"Victoria Secret",
    "photo":"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042017/untitled-2_15.png",
    "scores":[3,3,3,3,3,3,3,3,3,3]
    },
  {
    "name":"Pink Studios",
    "photo":"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/072010/logo_0.jpg",
    "scores":[4,4,4,4,4,4,4,4,4,4]
  },

  {
    "name":"Wal Mart",
    "photo":"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/072010/LOGO_WALMART_MEXICO.png",
    "scores":[5,5,5,5,5,5,5,5,5,5]
  },
 
  {
    "name":"Kohls Shopping",
    "photo":"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/052012/kohls.png",
    "scores":[2,2,2,2,2,2,2,2,2,2]
  }
 

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
