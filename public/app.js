const levelOneElem = document.querySelector('.levelOne');
const levelTwoElem = document.querySelector('.levelTwo');
const levelThreeElem = document.querySelector('.levelThree');

// create template 
const progressTemplateTxt = document.querySelector('.progressTemplate');
// compile template
const progressTemplate = Handlebars.compile(progressTemplateTxt.innerHTML);

axios.get('/levelOne')
.then(function(result){
    console.log(data.result)
    levelOneElem.innerHTML = progressTemplate({progressData:result.data})
})
