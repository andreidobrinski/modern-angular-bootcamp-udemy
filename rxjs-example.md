## Example using vanilla JS

HTML

```
<input />
```

JS

```
const input = document.querySelector('input')

input.addEventListener('input', (event) => {
  let text = event.target.value

  text = parseInt(text)

  if (isNaN(text)) {
    throw new Error('you must enter a number')
  }

  logValue(value)
})

const logValue = value => console.log(`Your value is ${value}`)
```
