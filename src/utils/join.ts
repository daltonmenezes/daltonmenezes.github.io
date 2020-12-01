/**
 * `join` all elements of a given array separated by the specified separator string.
 * @param array An array used to be joinned as an string basead on a separator.
 * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a white space.
 */
export default function join(array: string[], separator = ' '): string {
  if (!Array.isArray(array)) {
    return ''
  }

  return array.join(separator)
}
