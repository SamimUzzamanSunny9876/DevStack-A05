<div align="center">

# 🚀 DevStack

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> *An interactive web application that allows developers to explore various modern frameworks and seamlessly build their ideal custom tech stack.*

</div>

---

## ✨ Features

* **Interactive Stack Builder:** Browse through categorized technologies—such as Frontend, Backend, and Database—and seamlessly select one per category to curate your customized project stack.
* **Real-Time State Management:** Instantly view your selected technologies in a dedicated "Your Stack" sidebar, complete with a dynamic selection counter and a bulk "Remove All" functionality.
* **Toast Notifications:** Enjoy a polished user experience with automated, real-time pop-up notifications confirming whenever a technology is successfully added to your stack.

## 🛠️ Technology Stack

* **React:** Component-based library used for building the modern, interactive user interface.
* **TypeScript:** Strongly typed programming language ensuring robust, scalable, and error-free component logic.
* **Tailwind CSS:** Utility-first CSS framework utilized for rapid, responsive UI styling and clean component design.

---

------ Q & A ------

What is JSX, and why is it used in React?
Ans: JSX is the extension of javascript where we can write html inside our Javascript file. It is used in JS for better visualization and easier UI building.
What is the difference between props and state?
Ans: Props are read-only variables passed down from a parent component to a child component.
     State is local, mutable data managed within a component. State is used for interactive data that changes over time
What does the useState hook do, and where did you use it in this project?
Ans: The useState hook allows functional components to store and update local data over time.
     We have used useState in updating 'Your stack' and delating components. 
What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: The useEffect hook allows functional components to perform side effects—like fetching external data, or manually updating the DOM—outside of the normal rendering process. It is needed to load the JSON data to prevent performance issues and infinite loops.
Why does every item in a .map() list need a unique key prop?
Ans: To Identify each element uniquely  of that array on which map function is run on. This key give each element unique identity for further wokr on them.  
What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering is the process of displaying different user interface elements based on a true/false condition functioning similarly to an if-else statement in standard JavaScript.
We have render the selected stack(selectedCard) only if the card was selected.
How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: We pass data down from a parent component to a child component using props.We define these properties directly on the child's component tag in the parent file, and the child receives them as read-only variables.

To send data up from a child back to a parent, the parent passes a callback function down to the child through props. When a specific event occurs in the child (such as clicking an "Add to Stack" button), the child executes that function and passes the necessary data back as arguments for the parent to process.


