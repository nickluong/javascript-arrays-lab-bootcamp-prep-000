const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kitten.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kitten.shift()
}