/* 

Project Name: Personal Portfolio
Date:  2/9/23
File Name: header.js
Description: JavaScript for the header portion. 

Resources: Some code and id's were provided by Professor Krasso, other codes that helped me build this are from: https://www.w3schools.com/html/
Fonts are from Google Fonts 
*/

class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="header">
        <h1>Caitlynne Johnson's Personal Portfolio</h1> </div>
      
        
        <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <a href="projects.html">Projects</a>
        <a href="database.html">Database Projects</a>
        <a href="tests.html">API Unit Tests</a>
        <a href="about.html">About</a>
        <a href="resume.html">Resume</a>
      </div>
        `;
    }
}

customElements.define("header-component", Header);