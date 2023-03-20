let meg = { navn: "Mathias", 
    fødselsår: "2005",
    favorittfilm: "kung fu panda", 
    favorittall: "0",
    favorittmat: ["burger", "taco"],
    favorittfarge: "rosa",
    };


    for (let egenskap in meg) {
        console.log(meg[egenskap]);
      }