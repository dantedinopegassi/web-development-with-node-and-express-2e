const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
];

exports.getFortune = () => {
  const fortunaRandom = fortunes[Math.floor(Math.random() * fortunes.length)];
  return fortunaRandom;

    /******************************************** /
    /           Otra forma                        /
    / ********************************************/
    
  //   const indice = Math.floor(Math.random() * fortunes.length);
  //   return fortunes[indice];
};
