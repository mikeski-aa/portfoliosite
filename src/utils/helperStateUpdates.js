// helper functions to help with page updates and smooth scrolling

// smooth scrolling for each element
function smoothScroll(inputRef) {
  inputRef.current.scrollIntoView({ behavior: "smooth" });
}

// update active buttons depending on scroll location
// this is a little buggy and sometimes causes flickers
function helperScrollStateUpdate(state, setState, input) {
  // create shallow copy
  const copyState = [...state];
  for (let x = 0; x < copyState.length; x++) {
    if (copyState[x].name === input) {
      copyState[x].active = true;
    } else {
      copyState[x].active = false;
    }
  }
  setState(copyState);
}

// changes the active state - active state means that the current page is in view.
// on click the page smooth scrolls down to the correct element
function helperClickStateUpdate(state, setState, input, setCurr, setShortCurr) {
  const copyItems = [...state];
  for (let x = 0; x < copyItems.length; x++) {
    if (copyItems[x].name === input) {
      copyItems[x].active = true;

      // if case for contact since scrolling there is right now not possible due to height
      if (copyItems[x].name === "Contact_me.jsx") {
        setCurr(copyItems[x].name);
        setShortCurr(copyItems[x].shortname);
      }

      // setActivePage(copyItems[x].trueIndex);
      smoothScroll(copyItems[x].refLink);
    } else {
      copyItems[x].active = false;
    }
  }
  setState(copyItems);
}

function removeStateItem(state, setState, input) {
  const copyItems = [...state];
  const filteredItems = copyItems.filter((item) => item.name != input);

  setState(filteredItems);
}

// update default pages state which will dictate what is being rendered
function updateDisabledPagesState(state, setState, input) {
  const copyItems = [...state];

  for (let x = 0; x < copyItems.length; x++) {
    if (copyItems[x].shortname === input) {
      copyItems[x].disabled = true;
    }
  }

  setState(copyItems);
}

// this function will check whether the page clicked is already "opened"
// if it is not opened, the page will be added to active page state from default state
function checkOrAddPage(activeState, setActiveState, defaultState, input) {
  const copyActiveState = [...activeState];
  const copyDefaultState = [...defaultState];
  let found = false;

  for (let x = 0; x < copyActiveState.length; x++) {
    if (copyActiveState[x].shortname === input) {
      found = true;
    }
  }

  // button is found, don't need to do anything else
  if (found == true) {
    return;
  }
  console.log(found);
  console.log(copyDefaultState);
  for (let x = 0; x < copyDefaultState.length; x++) {
    if (copyDefaultState[x].shortname === input) {
      copyDefaultState[x].disabled = false;
      copyActiveState.push(copyDefaultState[x]);
      console.log(copyActiveState);
    }
  }
  console.log("active state copy new after push:");
  console.log(copyActiveState);
  setActiveState(copyActiveState);
}

export {
  helperScrollStateUpdate,
  helperClickStateUpdate,
  removeStateItem,
  updateDisabledPagesState,
  checkOrAddPage,
};
