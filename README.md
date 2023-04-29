# A website for small scale local level Bakery Business.
# Features:
- server side validation, authentication and authorization.
- not an impressive frontend design but functionalities work as expected xd.

# technologies used : 
- MERN Stack and some third party libraries 


# to use locally,
- to run the client, go to client directory and execute command : npm start
- to run the server, go to server directory and execute command : npm start


# create a .env file inside the client directory and include these variables : 
- REACT_APP_ITEMS_URL = http://localhost:`<client-port>`/items
- REACT_APP_SERVER_URL = http://localhost:`<serverclient-port>`
- REACT_APP_CREATE_USER = http://localhost:`<client-port>`/api/createuser
- REACT_APP_LOGIN_USER = http://localhost:`<client-port>`/api/loginuser
- REACT_APP_CREATE_ORDER = http://localhost:`<client-port>`/api/createorder
- REACT_APP_GET_ORDERS = http://localhost:`<client-port>`/api/getorders
- REACT_APP_COMPLETE_ORDER = http://localhost:`<client-port>`/api/completeorder
* use your own port for `<client-port>`. Default is 3000 and use a different port than  `<client-port>` for `<server-port>`


# Also create a .env file inside the server directory and include these variables:
- REACT_APP_DATABASE_URL = `<use your mongodb database link here>`
- REACT_APP_SERVER_PORT = `<server-port>`
- REACT_APP_SERVER_URL = http://localhost:`<server-port>`
- REACT_APP_CLIENT_URL = http://localhost:`<client-port>`
* use your own port for `<client-port>`. Default is 3000 and use a different port than  `<client-port>` for `<server-port>`