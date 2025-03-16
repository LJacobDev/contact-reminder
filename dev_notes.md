# General point of this repo

    rapidly use whatever I can remember about vue without looking it up first,

    to make a front end only / localstorage json database styled app about keeping
    in contact with people.

    It uses local storage so that it can be run off something like github pages
    or locally without needing to contact a back end anywhere

# Overview of design

    main page shows a set of 3 main buttons in a row at the top like a navbar


    	- add new contact

    	- add new interaction

    	- show contacts


        - either have a 'show interactions' button or else make that list view of
        them be the default that is shown whenever 'add new contact, interaction'
        or 'show contacts' is closed out



    then there can be a component below that uses the fade in/out conditional component rendering that shows either:

    - an add new contact form

    - an edit existing contact form (can be add same as new one if I make it that way)

    - a component that is a list of contacts, where clicking on one gives you the edit contact form

    - a component that allows adding a new interaction, which will also be the one to edit an interaction

        (adding new will create the interaction, and bring to edit view.  edit view will have save and delete buttons)

    - a component that is a grid of interactions

        - the interactions have date, contact, summary of thing done,
        summary of next thing to do, date to do next thing at, viewable from the list

    	then you can sort them by date done, but the usual order will be sorted by date to do next thing at

    	probably a combo box or something to select whether to sort by date done or date to do next thing at


    - make a thing that either shows all, or I guess has some kind of pagination that only shows (selectable per page of 10, 20, 50, all)



    	I think I'd rather use vue router than the hide/show conditional rendering, so that it is more like going to different pages.. however, even that is something that can happen within a div kind of component and the navbar at the top can still stay the same..

    		it's just that I'm not sure whether it merits having other 'url links' to go to the different things but I imagine it actually should so yes I want to use the vue router for this

# Things to remember

    I'm adding vue router and want to use it for /contacts, /interactions, /contacts/edit and that kind of thing

    I'm adding 'Vitest' unit testing and I want to make use of it

# Things to do next

    Clear out vite scaffolding

    Make initial data stucture for how contacts and interactions will be saved and related to each other

    Make initial placeholder type main view component

    tidy up dev_notes.md to have better appearance when viewing on github
    (break long lines of text to avoid getting horizontal scrollbar on it)

# Things done so far

    - initial project directory created

    - dev_notes.md created
