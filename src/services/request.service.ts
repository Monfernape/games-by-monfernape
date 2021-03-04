export const get = <T>(url: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};
