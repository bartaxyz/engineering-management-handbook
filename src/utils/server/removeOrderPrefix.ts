export const removeOrderPrefix = (name: string) => {
  return name.replace(/^[0-9x]+-/, "");
};
