const app = "I don't do much."

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function destructivelyAppendKitten(name){
   kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function appendKitten(name){var nKittens = kittens 
   return kittens.push(name)
}