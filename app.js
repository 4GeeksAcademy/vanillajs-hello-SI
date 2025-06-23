window.onload = function() {
//Array
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Combinations to generate:
for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      let domain = pronoun[p] + adj[a] + noun[n] + ".com";
      console.log(domain);
    }
  }
}
}