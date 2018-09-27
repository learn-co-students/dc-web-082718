# Welcome to Travelatr!

Travelatr is company with a singular vision: to enable people from all walks of life to write about their travels to spectacular destinations all over the globe in order to foster a sense of global community and a heightened cultural awareness.

Our founder - a world renowned ice-cream-eating contest champion, gourmet hot-dog connoisseur, and bespoke phone case designer - has hired a diverse pool of talent to execute this vision, a pool that begins and ends with you!

## Instructions

Our vision has already begun! We've created migrations and a seed file for you to begin the execution of our vision! Just run `rake db:setup`!

## Deliverables

We envision a relationship between our models as follows:

Blogger -< Post >- Destination


For each model, we have a specific vision in mind:

Blogger:

1. Users should be able to create a new blogger
 	- Bloggers should have unique names and ages above 0, and their bio should be over 30 characters long.
2. Users should be able to see the profile page of a blogger. On this page, a user should see:
	- The total likes on all of that blogger's posts
	- A link to that blogger's featured post (the post with the most likes)
	- **BONUS** A list of that users top 5 most written about destinations (the destinations with the most posts)

Destination:

1. Users should be able to see a destination profile page. On this page, a user should see:
	- The most recent 5 posts written about this destination
	- A link to a featured post (this destination's post with the most likes)
	- The average age of all unique bloggers who have written about this destination.

Post:

1. Users should be able to create and edit a post
	- Users should be able to select a blogger from a dropdown menu
	- Users should be able to select a destination from a dropdown menu
	- A post should be have a title and content longer than 100 characters
2. Users should be able to see a post's page with its title and content displayed. On this page, a user should see:
	- A link to the page of that post's author
	- A link to the page of that post's destination
	- A like button link that increases the like count for that post (should take the user to the same page)