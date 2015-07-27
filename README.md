# React boilerplate and example - Click competition game
## Using flux architecture with Reflux library and ES6
---------------------------------------

# Let's do it
Run

    npm install


## Structure
We are gonna use [Reflux](https://github.com/spoike/refluxjs) for this project.

Also we are gonna use with grunt that tools:

 - Babelify
 - Browserify
 - LiveReactLoad
 - ESLINT

The structure of the project is composed following the three basic elements of FLUX architecture:

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

#First of all
We are gonna split the information in two arrays of data:

 - List : Array of data that contains the static information (name). The order of that array never changes.
 - LeaderBoard: dynamic array that contains the same information as list + ID and SCORE.
 
#Why we are using two data arrays:

##First of all let's talk about how our application works:

On each button click you will fire a onClick event that calls a action, that action send a signal to our store and calls the incrementScore function.
Our incrementScore function will find our player on the LeaderBoard array using our ID and will increment the score by one. After that we will trigger our changes to all subscribed components.

##The problem:
If we only have one array for hold all players information on each array reorder we will render all of our components and the two components(clickableArea and leaderBoard) will be reordered.
We need to have our players list connected to store because we need to know when new user is added but also we need to dismiss all array reorder changes...

###The solution:
We will have two arrays, as you can see, to hold our information.
One with a static order and another with a dynamic order connected by a KEY sended on each click to find our player on LB list. 

# Store structure:
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

Get initial state will set our init information:

    getInitialState: function () {
        this.players.list = [
            {name: 'Carles'},
            {name: 'Xavi'},
            {name: 'Tomás'},
            {name: 'Adri'}
        ];
        this.players.leaderBoard = [
            {name: 'Carles', id: 0, score: 0},
            {name: 'Xavi', id: 1, score: 0},
            {name: 'Tomás', id: 2, score: 0},
            {name: 'Adri', id: 3, score: 0}
        ];
        return this.players;
    }
   
Init will be called on store creation:
   
    init: function () {
            this.getInitialState();
        },

Sort players will sort our leaderBoard list by SCORE

    sortPlayers: function sortPlayers() {
        this.players.leaderBoard.sort(function (previous, current) {
            let result = 0;
            if (previous.score < current.score) {
                result = 1;
            } else if (previous.score > current.score) {
                result = -1;
            }
            return result;
        });
    }
    
Add player will add our new player to the two arrays. On the leaderBoard array we save the player list array index as ID
    
    addPlayer: function (data) {
        let id = this.players.list.push({name: data}) - 1;
        this.players.leaderBoard.push({name: data, score: 0, id: id});
        this.trigger(this.players.list);
    }

We also have two getters:

    getPlayersList: function () {
        return this.players.list;
    },

    getPlayersLB: function () {
        return this.players.leaderBoard;
    }
    
Finally we have our incrementScore function that recibes our player ID, finds it on our leaderBoard array and increments the score by one.
After that we call our sort players and we do a trigger to all of our subscribed components.
    
    incrementScore: function (playerId) {
        this.players.leaderBoard.find(x => x.id === playerId).score++;
        this.sortPlayers();
        this.trigger(this.players.leaderBoard);
    }

###Components
 
---------------------------------------

####ClickGame

ClickGame is basically a wrapper for all the components. Holds a title and three more components:

####Header

Header is a component used to add new players to the game. That component has a input and a simple function to catch the input value, send it to the action and reset the input box.

####ClickableArea

ClickableArea has a list of players with a related button. That button will increment the score leaderBoard counter by one.

Let's se the code:

We are gonna mixin with ListenerMixin, that will help us to listen to our store and dispatch custom functions.

    mixins: [Reflux.ListenerMixin],
    
Used to define the type of our components properties. Is important use that to improve the reusability of our component.

    propTypes: {
            players: React.PropTypes.array
        }

React function called on component creation. We will listen any change in PlayersStore and call our callback

    componentDidMount: function () {
            this.listenTo(PlayersStore, this.refreshList);
    }

React function called on component creation to hold on state property the data returned by getPlayers()

    getInitialState: function () {
        return getPlayers();
    },
    
Refresh list is the callback used on our listenTo.

    refreshList: function () {
        this.setState({
            players: PlayersStore.getPlayersList()
        });
    }
    
Get items will loop through our players saving on a array PlayerItems components. We will send key and index to connect our to array of data.

    getItems: function () {
        let items = [],
            i, len = this.state.players.length;

        for (i = 0; i < len; i++) {
            items.push(<PlayerItem key={i} name={this.state.players[i].name} index={i}/>);
        }

        this.counter++;
        return items;
    },
 
####LeaderBoard

Leader board has the same function structure of ClickableArea, but in that case we will call BoardItems instead of call PlayerItems





 
 