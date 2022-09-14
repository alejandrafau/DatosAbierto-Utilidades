
import styles from '../styles/Home.module.css'
import React from "react";
import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '../pages/_app'

import BaseFormLayout from "../components/BaseFormLayout";
import InputTypeSelect from "../components/InputTypeSelect";
import InputTypeText from "../components/InputTypeText";
import CustomSubmitButton from "../components/FormSubmitButton";
import Layout from "../components/layout";
import InputTypeFile from "../components/InputTypeFile";
const OPTIONS = [
    { name:"JSON" ,value: "JSON"},
    { name:"XLSX" ,value: "XLSX"},

];
const CatalogRestoreForm: NextPageWithLayout = () => {
    return   <>

        <InputTypeFile label={"El catálogo de origen que se restaura"} placeholder={"asd"} required={true}></InputTypeFile>
        <InputTypeText placeholder={""} label={"URL del portal  CKAN de  origen"} required={true} id={"url-origen"}/>
        <InputTypeText placeholder={""} label={"URL del portal  CKAN de  destino"} required={true} id={"url-destino"}/>
        <InputTypeText placeholder={""} label={"APIkey de un usuario con permisos que le permitan  crear o editar  un  dataset"} required={true} id={"apikey"}/>


        <CustomSubmitButton label={"VALIDAR"} />
    </>

}

CatalogRestoreForm.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <BaseFormLayout title={"Validación de distribuciones de series de tiempo"} onSubmit={undefined}>
                {page}
            </BaseFormLayout>
        </Layout>
    )
}

export default CatalogRestoreForm;


