import AppState from './js/app/appstate.js';
import { hex2rgb } from './js/utils/utils.js'

/**
 * Initializes WebGL2 
 * @returns { WebGL2RenderingContext | null } The WebGL2 context or Null
 */
function initGl( )
{
    var gl = canvas.getContext('webgl2');
    return gl;

    throw '"initGl" not implemented' 

}


/**
 * Clears scene and canvas
 * 
 * Find the Aggie colors here: https://marketingtoolbox.ucdavis.edu/brand-guide/colors
 * Use the 'hex2rgb' function to convert HEX colors
 * 
 * Use app_state.getState( ui_element_name ) to query the UI state
 * For example app_state.getState( 'Canvas Color' ) returns the currently selected color name
 * 
 * @param { WebGL2RenderingContext } gl The WebGL2 context used on the canvas element
 * @param { AppState } app_state The state of the UI
 */
function clearCanvas( gl, app_state )
{
    var AggieBlue_red = hex2rgb('#022851')[0];
    var AggieBlue_green = hex2rgb('#022851')[1];
    var AggieBlue_blue = hex2rgb('#022851')[2];
    var AggieGold_red = hex2rgb('#FFBF00')[0];
    var AggieGold_green = hex2rgb('#FFBF00')[1];
    var AggieGold_blue = hex2rgb('#FFBF00')[2];
    if ( app_state.getState('Canvas Color') == 'Aggie Blue' ) {
        gl.clearColor(AggieBlue_red,AggieBlue_green,AggieBlue_blue,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0,0,0,0);
    } else if ( app_state.getState('Canvas Color') == 'Aggie Gold' ) {
        gl.clearColor(AggieGold_red,AggieGold_green,AggieGold_blue,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0,0,0,0);
    }
    return;
    throw '"clearCanvas" not implemented' 
}


// JS Module Export -- No need to modify this
export
{

    initGl,
    clearCanvas,

}