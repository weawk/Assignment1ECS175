'use strict'

import Input from "../input/input.js"

class AppState
{

    constructor( app )
    {

        
        this.app = app

        // get list of UI indicators
        this.ui_categories = {
            "Canvas Color":
            {

                "Aggie Blue": document.getElementById( "blueCanvasColor" ),
                "Aggie Gold": document.getElementById( "goldCanvasColor" )

            },
        }

        // create state dictionary
        this.ui_state = {
            "Canvas Color": null
        }

        // Update UI with default values
        this.updateUI( "Canvas Color", "Aggie Blue" )
    }

    /**
     * Returns the content of a UI state
     * @param {String} name The name of the state to query 
     * @returns {String | null} The state for the ui state name
     */
    getState( name )
    {
        return this.ui_state[name]
    }

    /**
     * Updates the app state by checking the input module for changes in user input
     */
    update( )
    {

        // Color Selector
        if ( Input.isKeyPressed( "b" ) ) {
            this.updateUI( "Canvas Color", "Aggie Blue" )
        } else if ( Input.isKeyPressed( "g" ) ) {
            this.updateUI( "Canvas Color", "Aggie Gold" )
        }

    }

    /**
     * Updates the ui to represent the current interaction
     * @param { String } category The ui category to use; see this.ui_categories for reference
     * @param { String } name The name of the item within the category
     * @param { String | null } value The value to use if the ui element is not a toggle; sets the element to given string 
     */
    updateUI( category, name, value = null )
    {
        this.ui_state[category] = name
        for ( let key in this.ui_categories[ category ] )
        {

            this.updateUIElement( this.ui_categories[ category ][ key ], key == name, value )

        }

    }

    /**
     * Updates a single ui element with given state and value
     * @param { Element } el The dom element to update
     * @param { Boolean } state The state (active / inactive) to update it to
     * @param { String | null } value The value to use if the ui element is not a toggle; sets the element to given string 
     */
    updateUIElement( el, state, value )
    {

        el.classList.remove( state ? "inactive" : "active" )
        el.classList.add( state ? "active" : "inactive" )

        if ( state && value != null )
            el.innerHTML = value

    }

}

export default AppState
