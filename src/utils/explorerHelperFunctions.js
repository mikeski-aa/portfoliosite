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

export { checkPageIsOpen, addNewPageToNav };
