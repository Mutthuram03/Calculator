const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

let currentTheme = 0;

function cycleTheme() {
  const body = document.body;
  const calcBox = document.querySelector('.calculator');
  const btn = document.querySelector('.mode-toggle');
  const heading = document.querySelector('.main-heading');

  if (currentTheme === 0) {
    // LIGHT MODE
    body.style.backgroundColor = "#f0f0f0";
    calcBox.style.backgroundColor = "#ffffff";
    display.style.backgroundColor = "#fff";
    display.style.color = "#000";
    heading.style.color = "#111";
    btn.textContent = "Mode: Light";
  } else if (currentTheme === 1) {
    // NIGHT MODE
    body.style.backgroundColor = "#0a0a0a";
    calcBox.style.backgroundColor = "#111";
    display.style.backgroundColor = "#222";
    display.style.color = "#a8a8a8";
    heading.style.color = "#ccc";
    btn.textContent = "Mode: Night";
  } else {
    // DARK MODE (DEFAULT)
    body.style.backgroundColor = "#3b4664";
    calcBox.style.backgroundColor = "#2e3a59";
    display.style.backgroundColor = "#181f32";
    display.style.color = "#fff";
    heading.style.color = "#fff";
    btn.textContent = "Mode: Dark";
  }

  currentTheme = (currentTheme + 1) % 3;
}

let isDesktopView = false;

function toggleView() {
  const calc = document.getElementById('calculator');
  const btn = document.querySelector('.view-toggle');

  isDesktopView = !isDesktopView;

  if (isDesktopView) {
    calc.classList.add('desktop-view');
    btn.textContent = "View: Desktop";
  } else {
    calc.classList.remove('desktop-view');
    btn.textContent = "View: Mobile";
  }
}

window.onload = () => {
  cycleTheme();
}
