/*
Title: Assignment 5.2 Bob's Automotive Repair Shop
File Name: cart-component.js
Date: 1/31/2023
Description: Script
*/

class CartComponent extends HTMLElement { 
    constructor() {
        super();
    }

    connectedCallback() { // Function for Font Awesome string
        this.innerHTML = `<div id="iconColor"> 
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
            </div>`;

    }

    }

    customElements.define(cart-CompositionEvent, CartComponent);

    