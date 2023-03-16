export const checkSpam = (text, spamKeywords) => {
  const a = text.toLowerCase();
  let check = false;
  for (let i = 0; i < spamKeywords.length; i++) 
  {
    if (a.includes(spamKeywords[i].toLowerCase())) 
    {
      check = true;
    }
  }
  return check
}