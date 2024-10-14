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

export {
  helperScrollStateUpdate,
  helperClickStateUpdate,
  removeStateItem,
  updateDisabledPagesState,
};
