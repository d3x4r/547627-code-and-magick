'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGTH = 150;
var TEXT_HEIGTH = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getBlueColor = function () {
  var randomInt = Math.round(Math.random() * 255);
  return 'rgb(0 ,' + ' ' + randomInt + ', 255)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'normal 16px PT Mono';
  var greetings = ['Ура вы победили!', 'Список результатов:'];
  for (var j = 0; j < greetings.length; j++) {
    ctx.fillText(greetings [j], CLOUD_X + GAP * 2, CLOUD_Y + TEXT_HEIGTH * 2 + ((TEXT_HEIGTH + GAP) * i));
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';

    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + GAP + (BAR_WIDTH * 2 + GAP) * i, CLOUD_X + (BAR_MAX_HEIGTH - BAR_MAX_HEIGTH * times[i] / maxTime) - GAP);
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + GAP + (BAR_WIDTH * 2 + GAP) * i, CLOUD_HEIGHT);

    ctx.fillStyle = getBlueColor();

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + BAR_WIDTH + GAP + (BAR_WIDTH * 2 + GAP) * i, CLOUD_X + (BAR_MAX_HEIGTH - BAR_MAX_HEIGTH * times[i] / maxTime), BAR_WIDTH, BAR_MAX_HEIGTH * times[i] / maxTime);
  }
};
