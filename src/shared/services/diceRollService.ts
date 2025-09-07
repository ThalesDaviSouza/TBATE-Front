export function roll(numDices: number, numFaces: number): number[]{
  let results: number[] = [];

  for(let i = 0; i < numDices; i++){
    results[i] = Math.round(Math.random() * (numFaces-1)+1);
  }

  return results;
}