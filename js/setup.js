'use strict';

var removeClass = function (targetClassName, removeClassName) {
  var targetClass = document.querySelector(targetClassName);
  targetClass.classList.remove(removeClassName);
};

removeClass('.setup', 'hidden');
removeClass('.setup-similar', 'hidden');

var getRandomMage = function () {

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
