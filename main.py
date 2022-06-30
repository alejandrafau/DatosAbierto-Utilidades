import tempfile

import uvicorn
from fastapi import FastAPI, UploadFile, Query
from fastapi.responses import RedirectResponse

from portal_andino.update import catalog_update

app = FastAPI(
    title="API DatosAbiertos",
    description="""
    DatosAbiertos API te ayuda a hacer cosas asombrosas. 🚀

    ## Portal Andino

    En los portales podrás:

    * **Restaurar catálogos**.
    * **Verificar datasets** (_not implemented_).
    * ** ...
    """
)


@app.get("/")
def root():
    return RedirectResponse("/docs")


@app.post(
    "/catalog/restore",
    name="Restauración de catálogo",
    description="Restaura los datasets de un catálogo original al portal pasado por parámetro. Si hay temas presentes "
                "en el DataJson que no están en el portal de CKAN, los genera."
)
def catalog_restore(
        file: UploadFile = Query(description="El catálogo de origen que se restaura."),
        origin_url: str = Query(description="La URL del portal CKAN de origen."),
        destination_url: str = Query(description="La URL del portal CKAN de destino."),
        apikey: str = Query(description="La apikey de un usuario con los permisos que le permitan crear o "
                                        "actualizar el dataset")
):
    with tempfile.NamedTemporaryFile() as catalog:
        content = file.file.read()
        catalog.write(content)
        catalog.seek(0)
        pushed_datasets = catalog_update(catalog.name, origin_url, destination_url, apikey)

    return pushed_datasets


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
