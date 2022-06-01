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

const ProductTitle = () => {
        const record = useRecordContext();
        return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

const ProductFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="products">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const ProductListComponent = () => (
    <List filters={ProductFilters}>
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

export const ProductEditComponent = () => (
    <Edit title={<ProductTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="products">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Edit>
);

export const ProductCreateComponent = () => (
    <Create>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="products">
                <SelectInput optionText="name" />
            </ReferenceInput>            
            <TextInput source="title" />
            <TextInput multiline source="body" />            
        </SimpleForm>
    </Create>
);