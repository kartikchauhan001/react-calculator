# React Calculator

A modern calculator application built with React using functional components and hooks.  
The project focuses on clean component architecture, state management, keyboard interaction, and input validation.

## Features

1.Basic arithmetic operations (+, −,  ×, ÷)
2.Safe expression evaluation (no `eval`)
3.Keyboard support (numbers, operators, Enter, Backspace)
4.Backspace functionality (⌫)
5.Prevention of invalid inputs (double operators, multiple decimals)
6.Dark mode toggle
7.Responsive UI with modern glassmorphism styling

## Tech Stack

- React (Functional Components)
- useState & useEffect Hooks
- CSS Modules
- Modern CSS (Flexbox / Grid)

## Architecture Overview

The application follows a simple component-based structure:

**App.jsx** → Manages state and calculation logic  
**Display.jsx** → Controlled input display component  
**ButtonsContainer.jsx** → Renders calculator buttons and sends user interaction to parent  

State is lifted to the parent component and passed down via props.  
Button interactions trigger handler functions that update state and re-render the UI.

## Installation

Clone the repository:

bash
git clone https://github.com/your-username/react-calculator.git

Navigate into the project:
cd react-calculator


Install dependencies:
npm install


Start development server:
npm run dev

Future Improvements

1.Calculation history panel
2.Scientific mode
3.Memory operations (M+, M-, MR)
4.Unit testing with Jest

👨‍💻 Author 
Kartik Chauhan 
B.Tech CSE | Frontend Developer 
📧 chauhankartik260@gmail.com
