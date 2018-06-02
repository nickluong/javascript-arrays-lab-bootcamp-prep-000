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

function appendKitten(name){
   return kittens.concat(name)
}

function prependKitten(name){
  var arr = [`${name}`]
  return arr.concat(kittens)
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.splice(0,1)
}