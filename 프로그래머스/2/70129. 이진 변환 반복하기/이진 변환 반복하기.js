function solution(s) {
    let index = 0;
    let count = 0;

  while (s !== "1") {
    index += 1;
    count += s.split("").filter((v) => v === "0").length;

    s = s.split("")
      .filter((v) => v === "1")
      .join("")
      .length.toString(2);
  }
let answer = [index, count]
  return answer;
}