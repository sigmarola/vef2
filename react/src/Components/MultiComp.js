import React from 'react';
import { Tab, Container} from 'semantic-ui-react';
import Menus from './Menu';
import  Char from './Charactersheet';
//import {Comp, Another} from './small';

const panes = [
    { 
    menuItem: 'Character sheet', 
    pane: 
    {   
        key: 'tab1',
        content:<Char /> }
    },
    { 
    menuItem: 'Tab 2', 
    pane: 
    {   
        key: 'tab2',
        content:<Menus.Menu1 /> }
    },
    { 
    menuItem: 'Tab 3', 
    pane: 
    {   
        key: 'tab3',
        content:<Menus.Menu2 /> }
    },
  ]
/*export default class Tabs{
    render(){
        return(
            <div>
            
            
            </div>
            
        )
    }
}*/
const Tabs = () =>(
    <div>
        <Tab panes={panes} renderActiveOnly={false} />
        
    </div>
)

export default Tabs





