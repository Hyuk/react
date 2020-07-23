"use strict";

console.log('App.js is running!'); // JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
};

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")), /*#__PURE__*/React.createElement("form", {
  onSubmit: onFormSubmit
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "option"
}), /*#__PURE__*/React.createElement("button", null, "Add Option")));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); // Create render function that renders the new jsx
// Call it right away
// Call it after options array added to
