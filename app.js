// your code here!


$(function() {

	$(document).on('click','#text-analyze-button',function(event){
		event.preventDefault()
		let words = getTokens($('#user-text').val())
		let numberWords = words.length
		let uniqueWordCount = numberUniqueWords(words)
		let averageLength = averageWordLength(words).toFixed(2)
		console.log(words)
		$('dl.text-report').removeClass('hidden')
		$('dl.text-report').find('dd:first-of-type').html(numberWords)
		$('dl.text-report').find('dd:nth-of-type(2)').html(uniqueWordCount)
		$('dl.text-report').find('dd:nth-of-type(3)').html(averageLength)
	})


})


function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ (),!?.";:-]+/).filter(Boolean).sort();
}

function numberUniqueWords(words) {
	let wordFrequencies = {}
	for (let i = 0; i <= words.length; i++) {
		if (words[i] in wordFrequencies) {
			wordFrequencies[words[i]]++;
		}
		else {
			wordFrequencies[words[i]] = 1;
		}
	}
	let totalUniqueWords = Object.keys(wordFrequencies).length
	return totalUniqueWords
}

function averageWordLength(words) {
	let totalLetters = 0
	words.forEach(function(word){
		word.replace(/\d/,'')
	})
	let newNumberWords = 0
	for (let i = 0; i <= words.length-1; i++) {
		let currentWord = words[i]
		console.log(currentWord.length)
		totalLetters = totalLetters + currentWord.length
		if (currentWord.length != 0) {
			newNumberWords++
		}
	}
	console.log(words.length)
	console.log(newNumberWords)
	console.log(words)
	return totalLetters/newNumberWords
}