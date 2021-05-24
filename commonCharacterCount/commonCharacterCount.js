const commonCharacterCount_lifeofnations = (s1, s2) => {
  for (var i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "!");
  }
  return s2.replace(/[^!]/g, "").length;
};

const commonCharacterCount_mine = (s1, s2) => {
  let s1Map = new Map;
  let s2Map = new Map;
  let ans = 0;
  
  s1.split('').map(ch => !s1Map.has(ch)?s1Map.set(ch,1):s1Map.set(ch,s1Map.get(ch)+1));
  s2.split('').map(ch => {
    if(s1Map.has(ch)){
      !s2Map.has(ch) ? s2Map.set(ch,1) : s2Map.set(ch,s2Map.get(ch)+1<=s1Map.get(ch)?s2Map.get(ch)+1:s2Map.get(ch))
    }
  });
  
  for (let value of s2Map.values()) {
      ans += value;
  }
  
  return ans;
};

module.exports = { commonCharacterCount_lifeofnations, commonCharacterCount_mine };