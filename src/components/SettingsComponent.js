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

const SettingsTitle = () => {
        const record = useRecordContext();
        return <span>Settings {record ? `"${record.title}"` : ''}</span>;
};

const SettingsFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="Settings">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const SettingsListComponent = () => (
    <List filters={SettingsFilters}>
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

export const SettingsEditComponent = () => (
    <Edit title={<SettingsTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Settings">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Edit>
);

export const SettingsCreateComponent = () => (
    <Create>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Settings">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Create>
);