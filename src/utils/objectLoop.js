export const setActivityState = (keyName, object) => {
  let newActives = {}
  Object.keys(object).forEach(key => {
    newActives = {...newActives, [key]: key === keyName}
  })
  return newActives
}
