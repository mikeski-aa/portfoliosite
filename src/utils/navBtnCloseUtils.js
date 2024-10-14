function manyPagesCloseOne(navItems, setNavItems, input) {
  const copyNav = [...navItems];

  const filteredNav = copyNav.filter((item) => item.name != input);
  setNavItems(filteredNav);
}

function deactivatePage(defaultPages, setDefaultPages, input) {
  const copyDefault = [...defaultPages];

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === input) {
      copyDefault[x].disabled = true;
      copyDefault[x].active = false;
    }
  }

  setDefaultPages(copyDefault);
}

function checkIfBonusPresent(navItems) {
  const copyNav = [...navItems];
  let present = false;
  for (let x = 0; x < copyNav.length; x++) {
    if (copyNav[x].name === "bonusPage.js") {
      present = true;
    }
  }

  return present;
}

function activateBonusPage(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  for (let x = 0; x < copyNav.length; x++) {
    if (copyNav[x].name === "bonusPage.js") {
      copyNav[x].active = true;
    }
  }

  setNavItems(copyNav);

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    }
  }

  setDefaultPages(copyDefault);
}

// this function handles a LOT. However, I can't chain state updates.
function lastItemWithBonus(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems,
  input
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  // first we filter the nav to remove the item clicked to be closed.
  const filteredNav = copyNav.filter((item) => item.name != input);

  // next we set bonus page as active since it is the last remaining page
  for (let x = 0; x < filteredNav.length; x++) {
    if (filteredNav[x].name === "bonusPage.js") {
      filteredNav[x].active = true;
    }
  }

  // set a new nav state
  setNavItems(filteredNav);

  // now we disable the default settings for the specific
  // item we just closed to prevent it from rendering instantly when reopened
  // we also enable the bonus page
  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === input) {
      copyDefault[x].disabled = true;
      copyDefault[x].active = false;
    } else if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    }
  }

  setDefaultPages(copyDefault);
}

export {
  manyPagesCloseOne,
  deactivatePage,
  checkIfBonusPresent,
  lastItemWithBonus,
};
