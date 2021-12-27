import os

from typing import Union

from fastapi.staticfiles import StaticFiles

PathLike = Union[str, "os.PathLike[str]"]

class SPAStaticFiles(StaticFiles):

    def __init__(self, directory: PathLike):
        super().__init__(
            directory=directory, 
            html=True
        )

    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('index.html', scope)
        return response