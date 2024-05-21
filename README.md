REVIE:

Revie is a hypothetical platform where users can sign up with their basic information and post reviews about apartments they've previously lived in. These reviews can include optional videos and/or images. Users can give reviews about the landlords, the environment the apartment is situated in, and the quality of amenities in the apartment. Reviews can be uniquely marked as helpful by random visitors of the platform. Visitors can also sort these reviews based on the most helpful (by count) or most recent.

FEATURES:

User Registration and Management: Users can create an account, update their details, and even convert their account to a landlord account.
Review Posting and Management: Users can post detailed reviews with optional multimedia attachments, update their reviews, and mark others' reviews as helpful.
Apartment Management: Landlords can add and manage apartment listings.
Review Sorting and Filtering: Visitors can sort reviews based on the most helpful or most recent criteria.

API ENDPOINTS:

User Router

Create User
POST /create-user

Get User by ID
GET /get-user-by-id/:ID

Get All Users
GET /get-users

Update User by ID
PATCH /update-user-by-id/:ID

Update User to Landlord by ID
PATCH /update-user-to-landlord-by-id/:ID

Delete User by ID
DELETE /delete-user-by-id/:ID

Review Router

Create Review
POST /create-review/:userID/:apartmentID

Get Review by ID
GET /get-review/:ID

Get Reviews for Apartment
GET /apartment-reviews/:ID

Get All Reviews
GET /get-reviews

Sort Reviews for Apartment by Most Helpful
GET /apartment-reviews/:ID/most-helpful

Sort Reviews for Apartment by Most Recent
GET /apartment-reviews/:ID/most-recent

Update Review by ID
PATCH /update-review/:ID

Mark Review as Helpful
PATCH /mark-review-as-helpful/:ID

Delete Review by ID
DELETE /delete-review/:ID

Apartment Router

Create Apartment
POST /create-apartment/:ID

Get Apartment by ID
GET /get-apartment-by-id/:ID

Get All Apartments
GET /get-all-apartments

Delete Apartment by ID
DELETE /delete-apartment-by-id/:ID

Deployment
The back-end API is deployed and can be accessed at:
https://revie-be.onrender.com/
