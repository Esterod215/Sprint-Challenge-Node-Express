Mention two parts of Express that you learned about this week.
-Express is  an application framework that sits atop of Node.JS that makes it easier to create web applications. You can think of it as react for your backend.
Its two main features are middleware and routing.
 Describe Middleware?
-Middleware is a function that get the request and response objects and can operate on them and can send a response back, or call the next middleware.
 Describe a Resource?
-Resource is what an application cares about. If the application deals with clients and orders and prices then the resource is e-commerce.
 What can the API return to help clients know if a request was successful?
-The API can return status codes to let the client know if the request went though or what type of error the request did.
 How can we partition our application into sub-applications?
 -Using routes we can work on a specific parts of the application and in that way convert an entire application into sub applications that come together again in the index.js file.