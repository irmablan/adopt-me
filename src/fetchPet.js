const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // async functions always return promises
  // react query expects us to return a promise
  // so we don't have to await the apiRes.json() because apiRes.json()
  // is already returning a promise
  return apiRes.json();
};

export default fetchPet;
