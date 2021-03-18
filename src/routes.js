import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{title:'Minha cidade'}} 
                />

            <Drawer.Screen
                name="Search"
                component={Search} 
                options={{title:'Procurar'}}/>

            <Drawer.Screen
                name="About"
                component={About}
                options={{title:'Sobre'}}
            />
        </Drawer.Navigator>
    )
}
export default Routes;