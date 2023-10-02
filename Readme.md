# Plaid + Firestore / Express + React
## Backend: Express.js

1.  /api/info : This endpoint is a POST request that returns information about the Plaid item, including the item ID, access token, and products associated with the item. 
 
2.  /api/create_link_token : This endpoint is a POST request that creates a link token, which is used to initialize the Plaid Link client-side. The link token is generated with configurations such as user ID, client name, products, country codes, and language. 
 
3.  /api/create_link_token_for_payment : This endpoint is a POST request that creates a link token specifically for a payment initiation flow. It creates a recipient and a payment, generates a link token with the payment initiation product, and associates the payment ID with the link token. 
 
4.  /api/set_access_token : This endpoint is a POST request that exchanges a public token obtained from the Plaid Link client for an API access token. It also retrieves the item ID associated with the access token. If the Transfer product is enabled, it authorizes and creates a transfer. 
 
5.  /api/auth : This endpoint is a GET request that retrieves ACH or ETF authentication data for the accounts associated with the Plaid item. It returns information such as account and routing numbers, account types, and verification status. 
 
6.  /api/transactions : This endpoint is a GET request that retrieves transaction data for the accounts associated with the Plaid item. It uses pagination to retrieve all historical updates and returns the 8 most recent transactions. It also stores the transactions in a Firebase collection named "transaction". 
 
7.  /api/balance : This endpoint is a GET request that retrieves real-time balance data for the accounts associated with the Plaid item. It returns information such as current balances, available balances, and account types. It also stores the balance data in a Firebase collection named "balance". 
 
8.  /api/accounts : This endpoint is a GET request that retrieves information about the accounts associated with the Plaid item. It returns details such as account IDs, balances, names, and types. 


## Frontend: React.js

1. The code uses Link's standard components to handle authentication and tokens provided by Plaid.

2. After authentication, a screen requesting transaction and balance will appear.