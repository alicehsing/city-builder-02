## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup
1) Three dropdowns
  - Why? We can tell which picture the user selected.
  - How? 
    - `dropdown.addEventListener('change', () => {})`
    - `dropdown.value` to get the selected image
2) Three images
  - Why? To display the select image
  - How? `myImg.src = './assets/${some-image}.jpeg'`
3) Input
  - Why? User can type in a slogan
  - How? 
    - `const slogan = myInput.value`
    - `myArray.push(slogan)`
4) Button
  - Why? Submit a slogan
  - How? `button.addEvenListener('click', () => {})`
5) Div for slogans
  - Why? A place to hold/inject slogans
  - Use the `display a list` pattern from earlier
6) Div for counts
  - Why? A place to hold how many times each dropdown was used


## Events
on change of any dropdown
  - the corresponding image will change
    - get the value from the dropdown element
    - use that value to change the correct image tag's `.src` property
  - the count of that dropdown will increment
    - skylineCount++
    - change the DOM to update the new count
on click of the button
  - get the slogan from the input.value
  - push the slogan to our array of slogans
  - update the DOM
    - clear out the old slogans from the DOM (immutable)
    - loop through slogan array
    - append each slogan