/*

            Title: Assignment 3.2 Restaurant App
            File Name: dessert.js
            Date: 1/19/2023
            Description: Script for johnson-restaurant.html 

            */

            import { Product } from "./product.js"; // import Product Class

            export class Dessert extends Product // import Dessert Class 

            {
                constructor(name, price)
                {
                    super(name, price);
                }
            }