from logging.config import dictConfig

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from host.api.api import api_router
from host.config import settings

dictConfig({
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "default": {
            "()": "uvicorn.logging.DefaultFormatter",
            "fmt": "%(levelprefix)s %(asctime)s %(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
    },
    "handlers": {
        "default": {
            "formatter": "default",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stderr",
        },
    },
    "loggers": {
        "api": {"handlers": ["default"], "level": settings.LOG_LEVEL},
    }
})

app = FastAPI(
    title="Host API",
    version="1.0.0",
    openapi_url=f"{settings.API_PREFIX}/openapi.json",
)

app.include_router(api_router, prefix=settings.API_PREFIX)

app.mount("/app1", StaticFiles(directory=f"{settings.APP1_STATIC_BASE}", html=True), name="app1")
