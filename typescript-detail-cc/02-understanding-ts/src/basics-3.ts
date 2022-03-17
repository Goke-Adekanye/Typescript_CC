//type aliases
type NumberStringCombo = number | string //type union
type ItalianEnglish =  "italiano" | "english" //type union - literals

function combine(
  i1: NumberStringCombo,
  i2: NumberStringCombo,
  language: ItalianEnglish
) {
  let result;
  if (typeof i1 === "number" && typeof i2 === "number") {
    result = i1 + i2;
  } else {
    result = i1.toString() + i2.toString();
  }
  if (language === "italiano") {
    console.log("il risultato è:", result);
  }
  if (language === "english") {
    console.log("the result is", result);
  }
  return result;
}

const combinedAges = combine(30, 50, "english");
