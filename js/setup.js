'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var formOpen = document.querySelector('.setup-open');
var form = document.querySelector('.setup');
var formClose = form.querySelector('.setup-close');

var mageFirstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var mageSecondName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var fireBallColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var userName = document.querySelector('.setup-user-name');
var closeEsc = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    getClose();
  }
};

var getOpen = function () {
  form.classList.remove('hidden');

  document.addEventListener('keydown', closeEsc);
};

var getClose = function () {
  form.classList.add('hidden');
};

formOpen.addEventListener('click', function () {
  getOpen();
});

formOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    getOpen();
  }
});

formClose.addEventListener('click', function () {
  getClose();
});

formClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    getClose();
  }
});

userName.addEventListener('focus', function () {
  document.removeEventListener('keydown', closeEsc);
});


var getRandomMage = function () {

  var getMageProperty = function (propertyList) {
    return propertyList[Math.floor(Math.random() * propertyList.length)];
  };

  var getMageFullName = function (firstName, secondName) {
    return getMageProperty(firstName) + ' ' + getMageProperty(secondName);
  };

  return {name: getMageFullName(mageFirstName, mageSecondName), coatColor: getMageProperty(coatColor), eyesColor: getMageProperty(eyesColor)};
};

var getMageList = function (mageCount) {
  var mageList = [];
  for (var i = 0; i < mageCount; i++) {
    mageList.push(getRandomMage());
  }
  return mageList;
};

var mageMoc = getMageList(4);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();

var similarMageAdd = function (mageCount) {
  for (var i = 0; i < mageCount.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = mageCount[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = mageCount[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = mageCount[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
};

similarMageAdd(mageMoc);

similarListElement.appendChild(fragment);

// Генерация случайных целых чисел в диапазоне min-max
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Получить один случайный элемент из массива
var getRandomProperty = function (propertyArray) {
  return propertyArray[getRandomNumber(0, propertyArray.length - 1)];
};

var wizardForm = document.querySelector('.setup-wizard-form');
var coat = wizardForm.querySelector('.wizard-coat');
var eyes = wizardForm.querySelector('.wizard-eyes');
var fireBall = wizardForm.querySelector('.setup-fireball-wrap');
var coatInput = wizardForm.querySelector('[name = "coat-color"]');
var eyesInput = wizardForm.querySelector('[name = "eyes-color"]');
var fireBallInput = wizardForm.querySelector('[name = "fireball-color"]');


/* Устанавливаем значение свойства style в разметке на основе случайного элемента массива
 и добавляем это значение в соответствующий input*/
var addRandomAtribute = function (element, elementInput, atributeValue, atributeData) {
  var property = getRandomProperty(atributeData);
  element.setAttribute('style', atributeValue + property);
  elementInput.value = property;
};

coat.addEventListener('click', function () {
  addRandomAtribute(coat, coatInput, 'fill:', coatColor);
});

eyes.addEventListener('click', function () {
  addRandomAtribute(eyes, eyesInput, 'fill:', eyesColor);
});

fireBall.addEventListener('click', function () {
  addRandomAtribute(fireBall, fireBallInput, 'background:', fireBallColor);
});
