from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message":"Hola Mundo"}

@app.get("/saludo")
def read_saludo():
    return {"message":"¡Hola, mundo desde un contenedor Docker!"}