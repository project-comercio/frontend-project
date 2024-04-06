export const randomize = async (array: []) => {
  const arrayEmbaralhado = array.slice();
  for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
  }
  return arrayEmbaralhado.slice(0, 20);
}