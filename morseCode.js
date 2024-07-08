
const data = {
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
};
export const findLetter = (letter, object = data) => {
    let val = null
    Object.keys(object).forEach(el => {
        if (el == letter) {
            val = object[el]
        }
    }
    )
    return val || '/'
}

export const morseReverseKeysData = Object.entries(data).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
}, {})



export const findMorse = (morse, object = morseReverseKeysData) => {
    if (!morse || !morse.length)
        return morse
    else {
        return morse.split('/').map(word => word.split(' ').map(v => morseReverseKeysData[v]).join('')).join(' ')
    }
}