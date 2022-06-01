import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useRecordContext,
    ImageField,
} from 'react-admin';

const InventoryTitle = () => {
        const record = useRecordContext();
        return <span>Inventory {record ? `"${record.title}"` : ''}</span>;
};

const InventoryFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="Inventory">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const InventoryListComponent = () => (
    <List filters={InventoryFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="price" />
            <TextField source="category" />
            <TextField source="description" />
            
            <EditButton />
        </Datagrid>
    </List>
);

export const InventoryEditComponent = () => (
    <Edit title={<InventoryTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Inventory">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Edit>
);

export const InventoryCreateComponent = () => (
    <Create>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Inventory">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Create>
);