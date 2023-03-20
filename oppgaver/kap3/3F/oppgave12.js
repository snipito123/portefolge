let personer = [
    { fornavn: "Lisa", etternavn: "Simpson" },
    { fornavn: "Peter", etternavn: "Griffin" },
    { fornavn: "Eric", etternavn: "Cartman" }
  ];
  function sammenlignfornavn(a, b) {
    if (a.fornavn > b.fornavn) {
      return 1;
    } else if (a.fornavn < b.fornavn) {
      return -1;
    } else {
      return 0;
    }
  }
  personer.sort(sammenlignfornavn);
  console.log(personer)