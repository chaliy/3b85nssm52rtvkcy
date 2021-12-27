from pydantic import BaseSettings


class Settings(BaseSettings):
    API_PREFIX: str = "/api"

    APP1_STATIC_BASE: str = "./app1/dist/app1"
    LOG_LEVEL: str = "DEBUG"


settings = Settings()
