interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}
interface Direccion {
    pais: string,
    casaNo: number
}


export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Cristina',
        edad: 26,
        direccion: {
            pais: 'España',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
