const hexInput = document.getElementById("hexInput")
let inputColor = document.getElementById("inputColor")
let sliderText = document.getElementById("sliderText")
let slider = document.getElementById("slider")


const isValidHex = (hex) => {
  if(!hex) return false;

  const strippedHex = hex.replace('#', '')
  return strippedHex.length === 3 || strippedHex.length === 6
}

hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value;
  if (!isValidHex(hex)) return

  const strippedHex = hex.replace('#', '')

  inputColor.style.backgroundColor = "#" + strippedHex
})

const convertHexToRGB= (hex) => {

  if(!isValidHex(hex)) return null

  let strippedHex = hex.replace('#', '')

  if(strippedHex.length === 3) {
     strippedHex = strippedHex[0] + strippedHex[0] + strippedHex[1] + strippedHex[1] +strippedHex[2] + strippedHex[2]
  }
  
  const r = parseInt(strippedHex.substring(0,2), 16)
  const g = parseInt(strippedHex.substring(2,4), 16)
  const b = parseInt(strippedHex.substring(4,6), 16)

  return {r,g,b}
}

const converRGBToHex = (r,g,b) => {
  const firstPair = ("0" + r.toString(16)).slice(-2)
  const secondPair = ("0" + g.toString(16)).slice(-2)
  const thirdPair = ("0" + b.toString(16)).slice(-2)
  
  const hex = `#${firstPair}${secondPair}${thirdPair}`
  return hex
}

slider.addEventListener("input", () => {
  sliderText.textContent = `${slider.value}%`
})
// console.log(converRGBToHex(0, 255, 255))