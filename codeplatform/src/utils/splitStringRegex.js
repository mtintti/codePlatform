
export function splitStringRegex(input) {
    if (typeof input !== "string") {
      console.error("splitStringRegex expects a string but received:", input);
      return [];
    }
  
    return input.match(/[\s\S]/gu) || [];
  }
  