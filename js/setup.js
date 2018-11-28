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

var getOpen = function () {
  form.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      getClose();
    }
  });
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

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomProperty = function (propertyArray) {
  return propertyArray[getRandomNumber(0, propertyArray.length - 1)];
};

var coat = document.querySelector('.wizard-coat');

coat.addEventListener('click', function () {
  coat.setAttribute('style', 'fill:' + getRandomProperty(coatColor));
});
