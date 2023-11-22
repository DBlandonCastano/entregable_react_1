const getRandomElement = (elements) => {
  //? Logica necesaria para devolver un elemento aleatorio de ese arreglo

  //? Suponiendo elements con 10 elementos
  // 0 ----> 0.999999999 * 10 => 0 ----> 9.999999999 ==> 0 ----> 9
  const indexRandom = Math.floor(Math.random() * elements.length);
  return elements[indexRandom];
};

export { getRandomElement };
