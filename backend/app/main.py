from fastapi import FastAPI
from app.api.routers import auth, users, positions

app = FastAPI(title="Stock Portfolio API")

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(positions.router, prefix="/positions", tags=["positions"])