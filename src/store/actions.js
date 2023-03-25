import API from "../axios/index";

export function searchMealsByName({ commit }, keyword) {
  API.get(`search.php?s=${keyword}`).then((res) => {
    commit("setMealsByName", res.data.meals);
  });
}

export function searchMealsByLetter({commit}, letter) {
  API.get(`/search.php?f=${letter}`).then((res) => {
    commit("setMealsByLetter", res.data.meals)
  })
}
