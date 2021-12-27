from pydantic import BaseSettings


class Settings(BaseSettings):
    API_PREFIX: str = "/api"

    APP1_STATIC_BASE: str = "./app1/dist/app1"
    ROOT1_STATIC_BASE: str = "./root1/dist/root1"
    LOG_LEVEL: str = "DEBUG"


settings = Settings()
