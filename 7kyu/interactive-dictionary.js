/**INSTRUCTIONS
 * In this kata, your job is to create a class Dictionary which you can 
 * add words to and their definitions.
 */
class Dictionary {
  constructor(key, value) {
    this.dictionary = []
  }
  
  newEntry(key, value) {
    this.dictionary.push({key, value})
  }
  
  look(key) {
      let definition = this.dictionary.find((word)=> word.key === key)
      return definition  ? definition.value : `Can't find entry for ${key}`
  }
}