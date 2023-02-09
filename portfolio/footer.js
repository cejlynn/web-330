/* 

Project Name: Personal Portfolio
Date:  2/9/23
File Name: footer.js
Description: JavaScript for the footer portion. 

Resources: Some code and id's were provided by Professor Krasso, other codes that helped me build this are from: https://www.w3schools.com/html/
Fonts are from Google Fonts 
*/

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p><div id="footer"><a href="https://github.com/cejlynn"> GitHub Repository</a> | <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/"> Bellevue University Web Development Degree </a> | <a href="https://github.com/buwebdev"> Youtube </a> | <a href="https://github.com/buwebdev"> Bellevue Web Development Repository </a> </p>
 </body>
 </html>
 
        `;
    }
}

customElements.define("footer-component", Footer); 