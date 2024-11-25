const arguments = process.argv.slice(2);

function CircleArea(r) {
  const area = 3.14 * r * r;
  console.log(area);
}
CircleArea(arguments[0] * 1);
