var db = require("./models");

var portfolio_items = [
  {
  textid: "0",
  picid: "10",
  image: "/images/andersen.png",
  title: "Freelance Work",
  description: "Site for a structural engineer.",
  language: "JavaScript, HTML, CSS",
  framework: "Bootstrap",
  library: "jQuery",
  database: "NA",
  other: "Git, GoDaddy Hosting",
  sitelink: "https://andersen-engineering.com",
  sitename: "Andersen Engineering",
  githublink: "https://github.com/nwimmer123/andersen-engineering",
  },
  {
  textid: "1",
  picid: "11",
  image: "/images/excel.png",
  title: "Freelance Work",
  description: "Site for an Excel consultant.",
  language: "JavaScript, HTML, CSS",
  framework: "Bootstrap",
  library: "jQuery",
  database: "NA",
  other: "Git, GoDaddy Hosting",
  sitelink: "https://ExcelExcelExcel.com",
  sitename: "ExcelExcelExcel",
  githublink: "https://github.com/nwimmer123/david-excel",
  },
  {
  textid: "2",
  picid: "12",
  image: "/images/read_it.png",
  title: "Read It",
  description: "Friends can share and discuss their favorites books.",
  language: "JavaScript, HTML, CSS",
  framework: "Bootstrap, Node, Express",
  library: "jQuery",
  database: "Moongoose, MongoDB",
  other: "Git, JSON, Handlebars",
  sitelink: "https://mysterious-basin-2931.herokuapp.com",
  sitename: "Read It",
  githublink: "https://github.com/nwimmer123/project-01",
  }

];

  


    db.Portfolio_Item.create(portfolio_items, function(err, portfolio_items){
      if (err) { return console.log('ERROR', err); }
      console.log("all items:", portfolio_items);
      console.log("created ", portfolio_items.length, " portfolio_items");
      process.exit();
    });

    // db.Portfolio_Item.remove({}, function(err, portfolio_items){
    //   process.exit();
    // });
