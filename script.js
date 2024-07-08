let data = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
}

/*
The rules of Morse Code
The duration of the dash is 3 times of dot.
Each dot of dash is followed by the blank period which equals to the dot duration.
Space between letters is 3 dots duration.
Space between words is 7 dots duration.
The most frequently occurring letter has shorter expression than others. (E has only one dot)
*/


const englishRef = document.getElementById('english')
const morseRef = document.getElementById('morse')
// morseRef.setAttribute('disabled', '')

const findLetter = (letter, object = data) => {
    let val = null
    Object.keys(object).forEach(el => {
        if (el == letter) {
            val = object[el]
        }
    }
    )
    return val || '/'
}
const morseReverseKeysData = Object.entries(data).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
}, {})

const findMorse = (morse, object = morseReverseKeysData) => {
    if (!morse || !morse.length) {
        return morse
    }
    else {
        return morse.split('/').map(word => word.split(' ').map(v => morseReverseKeysData[v]).join('')).join(' ')
    }
}
englishRef.addEventListener('keyup', () => {
    const letterArr = englishRef.value.split('')
    morseRef.value = letterArr.map(el => findLetter(el.toUpperCase())).join(' ')
})
morseRef.addEventListener('keyup', () => {
    englishRef.value = findMorse(morseRef.value)
})

// englishref on key up listener -- get englishref.value. split into a array remove spaces
// compare eacharray index to lowercase with data. keys, then for that value insert the value into 
// the morseRef

