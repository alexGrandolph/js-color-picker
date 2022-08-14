const hexInput = document.getElementById("hexInput")
let inputColor = document.getElementById("inputColor")
let alteredColor = document.getElementById("alteredColor")
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

const convertRGBToHex = (r,g,b) => {
  const firstPair = ("0" + r.toString(16)).slice(-2)
  const secondPair = ("0" + g.toString(16)).slice(-2)
  const thirdPair = ("0" + b.toString(16)).slice(-2)
  
  const hex = `#${firstPair}${secondPair}${thirdPair}`
  return hex
}

slider.addEventListener("input", () => {
  if(!isValidHex(hexInput.value)) return
  


  alteredColor.style.backgroundColor = "#" + newColor
})

const alterColor = (hex, percent) => {
  const {r,g,b} = convertHexToRGB(hex)
  const amount = Math.floor((percent / 100) * 255)

  const newR = increaseWithinRange(r, amount) 
  const newG = increaseWithinRange(g, amount)
  const newB = increaseWithinRange(b, amount)

  return convertRGBToHex(newR, newG, newB)
}

const increaseWithinRange = (hex, amount) => {
  const newHex = hex + amount
  if (newHex > 255) return 255
  if (newHex < 0) return 0
  return newHex;
}

