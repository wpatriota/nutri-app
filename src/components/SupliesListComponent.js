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

const SupliesTitle = () => {
        const record = useRecordContext();
        return <span>Suplies {record ? `"${record.title}"` : ''}</span>;
};

const SupliesFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="Suplies">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const SupliesListComponent = () => (
    <List filters={SupliesFilters}>
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

export const SupliesEditComponent = () => (
    <Edit title={<SupliesTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Suplies">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Edit>
);

export const SupliesCreateComponent = () => (
    <Create>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="Suplies">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Create>
);