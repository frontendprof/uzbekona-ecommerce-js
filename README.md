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

   1. Create ul.products
   2. Create il items
   3. Create div.product
   4. Add .product-image, .product-name, .product-brand, .product-price
   5. Style ul.products and internal divs
   6. Duplicate 2 times to show 3 products

4. Render Dynamic Home Page

   1. Create data.js
   2. Export an array of 6 products
   3. Create screen/HomeScreen.js
   4. Export HomeScreen as an object with render() method
   5. Implement render()
   6. Import data.js
   7. Return products mapped to lis inside the ul
   8. Create app.js
   9. Link it to index.html as module
   10. Set main id to main_container
   11. Create router() function
   12. Set main_container innerHTML to HomeScreen.render()
   13. Set window load event to router() function

5. Build Url Router

   1. Create routes as route:screen object for home screen
   2. Create utils.js
   3. Export parseRequestURL()
   4. Set url as hash address split by slash
   5. Return resource, id and endpoint of url
   6. Update router()
   7. Set request as parseRequestURL()
   8. build parsedUrl and compare with routes
   9. if route exists render it, else render Error 404
   10. Create screens/Error404.js and render error message

6. Create Node.js server

   1. Run npm init in the root folder
   2. npm install express
   3. create server.js
   4. add start command as node backend/server.js
   5. require express
   6. move data.js from frontend to backend
   7. Create route for /api/products
   8. return products in data.js
   9. run npm start

7. Load products from backend

   1. Edit HomeScreen.js
   2. Make render async
   3. Fetch products from "/api/products" in render()
   4. Make router() async and call await HomeScreen.render()
   5. use cors on backend
