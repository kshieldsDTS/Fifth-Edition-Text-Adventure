# Dungeons and Dragons Fifth Edition Text Adventure #

A classic text-based adventure using a React single page application. The application will source information for enemies using the https://open5e.com/ API, a Dungeons and Dragons Fifth Edition resource. 

## Wireframe ##

![main-screen](https://user-images.githubusercontent.com/94239332/148244109-51db5cc3-4041-4229-af56-51493afe9cea.jpeg)

This will be the primary view the user will see. The user will be presented with their character's current status and inventory, as well as the current narrative and a list of options. This narrative section can change if the player encounters combat.

## User Stories ##

### MVP ###
Allow the player to play through the game through several combat encounters and other scenarios.
Cause the player to lose should their hitpoints(HP) drop to zero.
Cause the player to win if they complete the objective.
Display the player's current/max HP.
Display the player's inventory.

### Bronze ###
Move the inventory to a drop down menu.
Allow tooltips to show when an item is hovered over.

### Silver ###
Allow multiple types of attacks in combat.
More dynamic inventory management.
Allow player to choose initial stats
Allow player to choose a class or job to change abilities

### Gold ###
Allow player to create a party of characters
Introduce magic abilities

## API ## 
This app will be using the https://open5e.com/ API. The app will be fetching monster data from the API, such as HP, Armor, Attacks, which will be used to dictate combat with the user.

<img width="427" alt="Screen Shot 2022-01-05 at 10 21 38 AM" src="https://user-images.githubusercontent.com/94239332/148244164-3ea82492-7138-4c46-a8f6-468b0e64dcc7.png">

## Component Heirarchy ##

![component heirarchy](https://user-images.githubusercontent.com/94239332/148244195-57cc1382-9963-4e87-bcb7-9ef3b6691ff5.jpeg)

This is the initial component heirarchy for the app, more may be added as needed.
