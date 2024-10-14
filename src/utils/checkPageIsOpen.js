function checkPageIsOpen(state, input) {
  let found = false;
  for (let x = 0; x < state.length; x++) {
    if (state[x].shortname === input) {
      found = true;
    }
  }

  return found;
}

export default checkPageIsOpen;
