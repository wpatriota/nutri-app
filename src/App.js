import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';

import authProvider from "./authProvider";
import dataProvider from './DataProvider';

import { UserListComponent } from './components/userListComponent';
import { Dashboard } from "./components/Dashboard";
import { PostCreateComponent, PostEditComponent, PostListComponent } from './components/postListComponent';
import { ProductCreateComponent, ProductEditComponent, ProductListComponent } from './components/ProductListComponent';
import { InventoryCreateComponent, InventoryEditComponent, InventoryListComponent } from "./components/InventoryListComponent";

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
      <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
          <Resource name="users" list={UserListComponent} />          
          <Resource name="products" list={ProductListComponent} edit={ProductEditComponent} create={ProductCreateComponent}/>
          <Resource name="inventory" list={InventoryListComponent} edit={InventoryEditComponent} create={InventoryCreateComponent}/>
      </Admin>
);

export default App;