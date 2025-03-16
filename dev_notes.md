

	rapidly use whatever I can remember about vue without looking it up first,

	to make a front end only / localstorage json database styled app about reminding and keep in contact with people

	I think I'd like it to be like this:


	single page application



	main page shows a set of 3 main buttons in a row at the top 

	
		- add new contact

		- add new interaction

		- show contacts

	

	that can be like a nav bar


	then there can be a component below that uses the fade in/out conditional component switching that shows either:

		- a component that is a list of contacts

		- an add new contact form

			- an edit existing contact form (can be add same as new one if I make it that way)

		- a component that is a grid of interactions

			- the interactions have date, contact, summary of thing done, summary of next thing to do, date to do next thing at

		then you can sort them by date done, but the usual order will be sorted by date to do next thing at

			probably a combo box or something to select whether to sort by date done or date to do next thing at


		- make a thing that either shows all, or I guess has some kind of pagination that only shows (selectable per page of 10, 20, 50, all)



		I think I'd rather use vue router than the hide/show conditional rendering, so that it is more like going to different pages.. however, even that is something that can happen within a div kind of component and the navbar at the top can still stay the same..

			it's just that I'm not sure whether it merits having other 'url links' to go to the different things but I imagine it actually should so yes I want to use the vue router for this


    

# Things to remember / add / do with this

	I'm adding vue router and want to use it for /contacts, /interactions, /contacts/edit and that kind of thing

	I'm adding 'Vitest' unit testing and I want to make use of it



# Things done so far

    - initial project directory created

    - dev_notes.md created

