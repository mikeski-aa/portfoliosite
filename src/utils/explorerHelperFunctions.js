// we check if the page is currently active or not
function checkPageIsOpen(navItems, input) {
  let found = false;
  for (let x = 0; x < navItems.length; x++) {
    if (navItems[x].shortname === input) {
      found = true;
    }
  }

  return found;
}

// we copy the object from default page objects to active after finding it by name
function addNewPageToNav(defaultPages, setNavItems, input, navItems) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      // we need to copy the page and re-enable it after it was closed!
      copyDefault[x].disabled = false;
      pageObject = copyDefault[x];
    }
  }

  copyNavItems.push(pageObject);
  console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

// function to add bonus page to navItems
function addBonusToNavNotEmpty(defaultPages, setNavItems, input, navItems) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      pageObject = copyDefault[x];
    }
  }

  copyNavItems.push(pageObject);
  console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

// function to add bonus page to navItems and to set it as active
function addBonusToNavIsEmpty(defaultPages, setNavItems, input, navItems) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      copyDefault[x].disabled = false;
      copyDefault[x].active = true;
      pageObject = copyDefault[x];
    }
  }

  copyNavItems.push(pageObject);
  console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

// function to set bonus as active and disabling all other pages
function focusBonusManyPages(
  navItems,
  setNavItems,
  defaultPages,
  setDefaultPages
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];

  for (let x = 0; x < copyNavItems.length; x++) {
    if (copyNavItems[x].name === "bonusPage.js") {
      copyNavItems[x].active = true;
    } else {
      copyNavItems[x].active = false;
    }
  }
  console.log("focusbonusmanypages");
  console.log(copyNavItems);

  setNavItems(copyNavItems);

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    } else {
      copyDefault[x].disabled = true;
    }
  }
  console.log(copyDefault);
  setDefaultPages(copyDefault);
}

export {
  checkPageIsOpen,
  addNewPageToNav,
  addBonusToNavNotEmpty,
  addBonusToNavIsEmpty,
  focusBonusManyPages,
};
