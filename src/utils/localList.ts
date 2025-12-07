export const getList = () => {
  const stored = localStorage.getItem("shoppingList");
  return stored ? JSON.parse(stored) : [];
};

export const addToList = (product: any) => {
  const list = getList();
  const exists = list.find((p: any) => p.id === product.id);

  if (!exists) {
    const updated = [...list, product];
    localStorage.setItem("shoppingList", JSON.stringify(updated));
  }
};

export const removeFromList = (id: number) => {
  const list = getList();
  const updated = list.filter((p: any) => p.id !== id);
  localStorage.setItem("shoppingList", JSON.stringify(updated));
};
