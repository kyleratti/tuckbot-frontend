/**
 *
 * @param str The hash URL to redirect to
 * @example setNewHashLocation("maintenance") // navigate to "#/maintenance"
 */
export const setNewHashLocation = (str: string) => {
  location.hash = `#/${str}`;

  // @ts-expect-error
  setGAPAgeUrl(`/${str}`);
};
