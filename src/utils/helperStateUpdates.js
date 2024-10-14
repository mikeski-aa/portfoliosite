// helper functions to help with page updates and smooth scrolling

// smooth scrolling for each element
function smoothScroll(inputRef) {
  inputRef.current.scrollIntoView({ behavior: "smooth" });
}

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

function updateDisabledPagesState(state, setState, input) {
  const copyItems = [...state];

  for (let x = 0; x < copyItems.length; x++) {
    if (copyItems[x].name === input) {
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
