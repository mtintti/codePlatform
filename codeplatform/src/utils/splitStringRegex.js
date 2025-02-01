import React from 'react'

 /*function splitStringRegex(input) {
  const chars = [];
  const regex = /[\s\S]/gu;

  let match;

  while((match) = regex.exec((input)) !== null){
    chars.push(match[0]);
  }
  return chars;
}
export default splitStringRegex;
*/

export function splitStringRegex(input) {
    if (typeof input !== "string") {
      console.error("splitStringRegex expects a string but received:", input);
      return [];
    }
  
    return input.match(/[\s\S]/gu) || [];
  }
  