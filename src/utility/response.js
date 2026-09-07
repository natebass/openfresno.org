export const jsonResponse = async (res) => {
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json();
};
