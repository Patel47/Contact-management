export default function getColorFromLetter(letter: any) {
  // Ensure the letter is uppercase to standardize
  const charCode = letter.toUpperCase().charCodeAt(0);

  // Generate a color based on the character code
  // Simple approach: use the character code as a base for RGB values
  const red = (charCode * 123) % 255;
  const green = (charCode * 456) % 255;
  const blue = (charCode * 789) % 255;

  // Convert RGB to a hexadecimal color string
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
