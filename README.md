## Uzbekona Ecommerce

1. Create Folder Structure

   1. Create root folder as uzbekona-ecommerce-js
   2. Add frontend and backend folder
   3. Create src folder in frontend
   4. Create index.html in frontend
   5. Run npm init in frontend folder
   6. npm install -D live-server(in dev mode)
   7. Add start command as live-server src --verbose
   8. Run npm start

2. Design Website

   1. Create style.css
   2. Link it to index.html
   3. Create div.grid-container
   4. Create header, main and footer sections
   5. Style html, body
   6. Style grid-container, header, main, footer

3. Create Static Home Page

3.1. Create ul.products
3.2. Create il items
3.3. Create div.product
3.4. Add .product-image, .product-name, .product-brand, .product-price
3.5. Style ul.products and internal divs
3.6. Duplicate 2 times to show 3 products

4. Render Dynamic Home Page

4.1. Create data.js
4.2. Export an array of 6 products
4.3. Create screen/HomeScreen.js
4.4. Export HomeScreen as an object with render() method
4.5. Implement render()
4.6. Import data.js
4.7. Return products mapped to lis inside the ul
4.8. Create app.js
4.9. Link it to index.html as module
4.10. Set main id to main_container
4.11. Create router() function
4.12. Set main_container innerHTML to HomeScreen.render()
4.13. Set window load event to router() function
