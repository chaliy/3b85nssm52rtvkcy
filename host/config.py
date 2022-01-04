from pydantic import BaseSettings


class Settings(BaseSettings):
    API_PREFIX: str = "/api"

    APP1_STATIC_BASE: str = "./app1/dist/app1"
    APP2_STATIC_BASE: str = "./app2/dist/app2"
    APP3_STATIC_BASE: str = "./app3/bin/Production/net6.0/publish/wwwroot"
    ROOT1_STATIC_BASE: str = "./root1/dist/root1"
    LOG_LEVEL: str = "DEBUG"


settings = Settings()
