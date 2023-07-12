const http = require ('http')

const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');
  
    // Handle API endpoints
    if (req.url === '/') {
      // API endpoint: Welcome message
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
    } else if (req.url === '/men') {
      // API endpoint: Men's products data
      res.statusCode = 200;
      const menProducts = generateDummyData(10, 'men');
      res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
      // API endpoint: Women's products data
      res.statusCode = 200;
      const womenProducts = generateDummyData(10, 'women');
      res.end(JSON.stringify(womenProducts));
    } else {
      // API endpoint: Page not found
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Page not found' }));
    }
  });
  
  // Start server
  const port = 3030;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  // Function to generate dummy product data
  function generateDummyData(count, category) {
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({ id: i, name: `Product ${i}`, category });
    }
    return products;
  }