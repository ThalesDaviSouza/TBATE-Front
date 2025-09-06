function createSelectedTabIdStore(){
  let id = $state(0);

  return{
    get value() { return id },
    set value(newId) { id = newId }
  }
}

export const selectedTabId = createSelectedTabIdStore();