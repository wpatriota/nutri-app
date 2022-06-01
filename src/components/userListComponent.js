import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserListComponent = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name.firstname" />
            <TextField source="name.lastname"  />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);