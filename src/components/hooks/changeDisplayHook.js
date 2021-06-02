export function useChangeDisplay (value = false, refOne, refTwo) {
    if (value) {
        refOne.current.style.display = 'block'
        refTwo.current.style.display = 'none'
    }
    else {
        refOne.current.style.display = 'none'
        refTwo.current.style.display = 'block'
    }

}