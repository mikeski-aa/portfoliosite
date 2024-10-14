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

export { manyPagesCloseOne, deactivatePage, checkIfBonusPresent };
