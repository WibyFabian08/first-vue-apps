export function setMealsByName(state, data) {
    state.mealsByName = data || []
}

export function setMealsByLetter(state, data) {
    state.mealsByLetter = data || []
}

export function setActiveLetter(state, data) {
    state.activeLetter = data || null
}