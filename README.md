## Inspiration
I've always had bad memory, but lately, I can't even remember my days anymore. Hours and days blur. I can't even see what happened last year. This has forced me to live in the moment since I won't remember anyway. I've coped with it through location history, time tracking, and calendar entries. However, other folks with amnesia may not have coping mechanisms that help them remember moments that couldn't form memories anymore. I want to help others keep their memories; lest we lose that which we can live for.

I was also inspired by my favorite game, Breath of the Wild. The Sheikah Slate contains the map of Hyrule, and it has a mechanic that allows the player to see the trail of their travelling. I would have wanted to see a visual map of my adventures over time just like this.

## What it does
Users can view their location history on a map and see when and where they had their adventures. The map has pins for every location (that is on Google Map's Places API) and it's filtered by month and year. Users also have the option to turn on route tracking, but I hid it from the demo because the map gets too crowded with all my travelling. Notifications will remind the user about past trips and suggest photos to look at.

## How I built it
Using my own location history (from _Google Timeline_ through _Takeout_), I plotted the places on a map (using _Google Maps API_) I've visited based on when I visited. For the interface, I used _React_ with no UI libraries. The notifications are in the form of text messages by _Twilio_.

## Challenges I ran into
The location history was in the form of a huge complicated nested JSON that was confusing to parse. It took me hours just figuring out how to get the latitude and longitude of just the visited places (the same object has the route, but that's in the backlog for another time).

## Accomplishments that I'm proud of
I did this by myself, even though I haven't coded in like 3 months! This is also my first hackathon in months, after being so active before. I'm so proud of myself because I worked hard on this project and I did not give up (the rest of my team bailed before they could contribute). 

## What I learned
I relearned how to code. I learned how to work with JSONs. I got better at using Google products, and I tried Twilio for the first time.

## What's next for Hero's Path
I would like it to have a better UI. I also wanted to include a tooltip that showed the user information about each visited location. I would want to include a Google Photos integration or similar so the map has photo locations. I have ambitious plans for the future of this product!
