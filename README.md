# React boilerplate and example - Click competition game
## Using flux architecture with Reflux library and ES6
---------------------------------------

# Let's do it
    run npm install to start developing


## Structure
We are gonna use [Reflux](https://github.com/spoike/refluxjs) for this project.

The structure of the project is composes following the three basic elements of FLUX architecture:

- Actions
- Stores
- Controller views - Components

###Actions
---------------------------------------

In that file we only define the actions without apply a logic to them. We will apply the logic on the store.

The file holds two actions:

 - Add player
 - Increment counter
 
###Stores
 
---------------------------------------

That file contains the data model and some logic to make the things work. It is composed by:

####Listenables

The following line define what actions are we gonna listen from store.

    listenables: [PlayerActions],
    
We just need to define that line and set our store functions with the same name that we have in our action dispatcher.

For example:

        incrementScore: function (player) {
            player.score++;
            this.trigger(this.players);
        }
        
Increment score will be fired when we call the action incrementScore from the component clicking a button.