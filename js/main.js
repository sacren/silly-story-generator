jQuery(function ($) {
  const storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

  const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
  ]

  const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
  ]

  const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
  ]

  function randomValueFromArray (array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  $('.randomize').click(function () {
    var newStory = storyText
    var xItem = randomValueFromArray(insertX)
    var yItem = randomValueFromArray(insertY)
    var zItem = randomValueFromArray(insertZ)
    var name = $('#customname').val()

    newStory = newStory.replace(':insertx:', xItem)
      .replace(':insertx:', xItem)
      .replace(':inserty:', yItem)
      .replace(':insertz:', zItem)

    if (name !== '') {
      newStory = newStory.replace('Bob', name)
    }

    if ($('#uk').prop('checked')) {
      var weight = Math.round(300 * 0.071429) + ' stone'
      var temperature = Math.round((94 - 32) / 1.8) + ' centigrade'

      newStory = newStory.replace('94 farenheit', temperature).replace('300 pounds', weight)
    }

    $('.story').text(newStory)
    $('.story').css('visibility', 'visible')
  })
})
