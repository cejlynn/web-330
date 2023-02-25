/*
    Title: Assignment 7.2 WhatABook, Part 2
    File Name: http-client.js
    Date: 2/24/2023
    Description: Js for whatabook 
*/


export class HttpClient { // Export class HttpClient

    async get(url, params = "") { // Async function
        url = new URL(url); // Instantiate new URL object
        params = new URLSearchParams(params); // Instantiate new URLSearchParams object
        
        url.search = params; // Assign to search property

        const res = await fetch(url.toString(), { // Code provided by Prof Krasso
            method: "GET",
        })
        
        return res.json(); // Return object literal as JSON object
    }

}